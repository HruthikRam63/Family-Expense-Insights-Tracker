const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Payment = require('./models/Payment');
const Household = require('./models/Household');
const { connectDatabase } = require('./loadData');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to the database
connectDatabase();

// Route to add a new payment
app.post('/api/payments', async (req, res) => {
  const { householdId, memberId, paymentDate, category, amount } = req.body;

  try {
    const newPayment = new Payment({
      householdId,
      memberId,
      paymentDate: new Date(paymentDate),
      category,
      amount
    });

    await newPayment.save();
    res.status(201).json({ message: 'Payment added successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add payment', details: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
