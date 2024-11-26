const mongoose = require('mongoose');

const HouseholdSchema = new mongoose.Schema({
  householdId: { type: String, required: true, unique: true },
  income: { type: Number, required: true },
  savings: { type: Number, required: true },
  monthlySpending: { type: Number, required: true },
  loanRepayment: { type: Number, required: true },
  creditSpending: { type: Number, required: true },
  dependents: { type: Number, required: true },
  financialMilestones: { type: Number, required: true },
});

module.exports = mongoose.model('Household', HouseholdSchema);
