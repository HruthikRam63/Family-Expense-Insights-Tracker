const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  householdId: { type: String, required: true },
  memberId: { type: String, required: true },
  paymentDate: { type: Date, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model('Payment', PaymentSchema);
