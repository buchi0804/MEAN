const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
  product: { type: String, required: true },
  category: { type: String, required: true },
  customer: { type: String, required: true },
  region: { type: String, required: true },
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Sale', SaleSchema);
