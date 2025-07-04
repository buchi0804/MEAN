const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  region: { type: String, required: true }
});

module.exports = mongoose.model('Customer', CustomerSchema);
