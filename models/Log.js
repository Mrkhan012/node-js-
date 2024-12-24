const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  flowId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flow',
    required: true,
  },
  apiConfigId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ApiConfig',
    required: true,
  },
  response: {
    type: Object,
    default: {},
  },
  status: {
    type: String,
    enum: ['success', 'failure'],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Log', logSchema);
