// Payment.js

import React, { useState } from 'react';
import { createPayment } from '../../../Service/ParentApi';
import './payment.css';
import { useNavigate } from 'react-router-dom';


const Payment = () => {
  const [amount, setAmount] = useState('');
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const Navigate=useNavigate()

  const handlePayment = async (e) => {
    try {
      if (isNaN(amount) || amount <= 0) {
        console.error('Invalid amount:', amount);
        return;
      }

      if (!parentName || !studentName) {
        console.error('Parent name or student name cannot be empty');
        return;
      }

      const response = await createPayment(amount, parentName, studentName);
      console.log(response, '@@@');

      const options = {
        key: 'rzp_test_3JhOFKERXnlHML',
        amount: response.data.amount,
        currency: 'INR',
        name: 'BackPack',
        description: 'Fee payment',
        order_id: response.data.id,
        handler: function (response) {
          console.log('Payment success:', response);

          
          Navigate('/parent/redirect')
        },
        prefill: {
          name: 'Backpack',
          email: 'BackPack@gmail.com',
          contact: '98000050000',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      e.preventDefault();
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Form</h2>
      <input
        className="input-field"
        type="text"
        placeholder="Enter parent name"
        value={parentName}
        onChange={(e) => setParentName(e.target.value)}
      />
      <br />
      <input
        className="input-field"
        type="text"
        placeholder="Enter student name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <br />
      <input
        className="input-field"
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button className="payment-button" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
