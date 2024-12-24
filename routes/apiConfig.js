const express = require('express');
const router = express.Router();
const apiConfigController = require('../controllers/apiConfigController'); // Ensure correct import

// Define the routes for API configuration
router.get('/', apiConfigController.getAllConfigs);  // Correctly use the controller method
router.post('/', apiConfigController.createConfig);  // Same here
router.get('/:id', apiConfigController.getConfigById); // Example for fetching by ID

module.exports = router;
