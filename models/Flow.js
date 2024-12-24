const mongoose = require('mongoose');

const flowSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  apiConfigs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ApiConfig',
  }],
  conditions: [{
    type: String,
    required: true,
  }],
});

module.exports = mongoose.model('Flow', flowSchema);
