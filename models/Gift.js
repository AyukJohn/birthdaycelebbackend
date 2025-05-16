const mongoose = require('mongoose');

const GiftSchema = new mongoose.Schema({
  option: String,
  phone: String,
  dataPhone: String,
  accountName: String,
  accountNumber: String,
  bank: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Gift', GiftSchema);
