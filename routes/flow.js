const express = require('express');
const router = express.Router();
const { createFlow } = require('../controllers/flowController');

// POST route for creating a Flow
router.post('/', createFlow);

module.exports = router;
