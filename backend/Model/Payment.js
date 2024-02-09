// FeePayment.js

const mongoose = require('mongoose');

const feePaymentSchema = new mongoose.Schema({
  orderId: { type: String, required: true },
  paymentId: { type: String, required: true },
  amount: { type: Number, required: true },
  parentName: { type: String, required: true },
  studentName: { type: String, required: true },
  
 
});

const FeePayment = mongoose.model('FeePayment', feePaymentSchema);

module.exports = FeePayment;
