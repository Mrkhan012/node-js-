const Flow = require('../models/Flow');
const { successResponse, errorResponse } = require('../utils/responseHandler');

// Create a new Flow
const createFlow = async (req, res) => {
  try {
    console.log('Request body:', req.body); // Debug log
    const { name, apiConfigs, conditions } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const newFlow = new Flow({ name, apiConfigs, conditions });
    await newFlow.save();
    successResponse(res, newFlow, 'Flow created successfully');
  } catch (error) {
    console.error('Error creating flow:', error);
    errorResponse(res, error, 'Error creating flow');
  }
};

module.exports = { createFlow };
