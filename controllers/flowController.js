const Flow = require('../models/Flow');
const ApiConfig = require('../models/ApiConfig');
const axios = require('axios');
const Log = require('../models/Log');
const { successResponse, errorResponse } = require('../utils/responseHandler');

// Create a new Flow
const createFlow = async (req, res) => {
  try {
    const { name, apiConfigs, conditions } = req.body;
    const newFlow = new Flow({ name, apiConfigs, conditions });
    await newFlow.save();
    successResponse(res, newFlow, 'Flow created successfully');
  } catch (error) {
    errorResponse(res, error);
  }
};

// Execute a Flow
const executeFlow = async (req, res) => {
  try {
    const flow = await Flow.findById(req.params.id).populate('apiConfigs');
    let result = {};
    let logEntries = [];

    for (let i = 0; i < flow.apiConfigs.length; i++) {
      const apiConfig = flow.apiConfigs[i];
      const response = await axios({
        method: apiConfig.method,
        url: apiConfig.url,
        headers: apiConfig.headers,
        data: apiConfig.body,
      });

      const log = new Log({
        flowId: flow._id,
        apiConfigId: apiConfig._id,
        response: response.data,
        status: 'success',
      });
      await log.save();
      logEntries.push(log);

      result = response.data;

      // Flow control based on conditions
      if (flow.conditions[i] === 'stop' && response.data.someCondition) {
        break;
      }
    }

    successResponse(res, { result, logs: logEntries }, 'Flow executed successfully');
  } catch (error) {
    errorResponse(res, error);
  }
};

module.exports = { createFlow, executeFlow };
