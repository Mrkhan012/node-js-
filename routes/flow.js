const express = require('express');
const { createFlow, executeFlow } = require('../controllers/flowController');
const router = express.Router();

router.post('/', createFlow);
router.post('/:id/execute', executeFlow);

module.exports = router;
