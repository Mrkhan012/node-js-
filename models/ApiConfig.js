const mongoose = require('mongoose');

const apiConfigSchema = new mongoose.Schema({
  method: {
    type: String,
    enum: ['GET', 'POST', 'PATCH', 'PUT'],
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  headers: {
    type: Object,
    default: {},
  },
  body: {
    type: Object,
    default: {},
  },
  sampleResponse: {
    type: Object,
    default: {},
  },
});

module.exports = mongoose.model('ApiConfig', apiConfigSchema);
