const ApiConfig = require('../models/ApiConfig');

// Fetch all API configs
const getAllConfigs = async (req, res) => {
  try {
    const apiConfigs = await ApiConfig.find();
    res.status(200).json(apiConfigs);
  } catch (error) {
    console.error('Error fetching API configs:', error);
    res.status(500).json({ message: 'Error fetching API configs', error });
  }
};

// Create new API config
const createConfig = async (req, res) => {
  try {
    const { method, url, headers, body, sampleResponse } = req.body;

    const newApiConfig = new ApiConfig({
      method,
      url,
      headers,
      body,
      sampleResponse,
    });

    await newApiConfig.save();
    res.status(201).json(newApiConfig);
  } catch (error) {
    console.error('Error creating API config:', error);
    res.status(500).json({ message: 'Error creating API config', error });
  }
};

// Fetch API config by ID
const getConfigById = async (req, res) => {
  try {
    const apiConfig = await ApiConfig.findById(req.params.id);
    if (!apiConfig) {
      return res.status(404).json({ message: 'API config not found' });
    }
    res.status(200).json(apiConfig);
  } catch (error) {
    console.error('Error fetching API config by ID:', error);
    res.status(500).json({ message: 'Error fetching API config', error });
  }
};

module.exports = { getAllConfigs, createConfig, getConfigById };
