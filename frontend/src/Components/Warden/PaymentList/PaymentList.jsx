import React, { useEffect, useState } from 'react';
import { getpaymentList } from '../../../Service/WardenApi';
import './Paylist.css'

const PaymentList = () => {
    const [paymentList, setPaymentList] = useState([]);

    const fetchPaymentList = async () => {
      try {
        const response = await getpaymentList();
        console.log('payment Response:', response);
        const fees = response.data && response.data.fees ? response.data.fees : [];

        setPaymentList(fees);
      } catch (error) {
        console.error('Error fetching payment list:', error.message);
      }
    };
  
    useEffect(() => {
      fetchPaymentList();
    }, []);
  return (
    <div className='pay-list-container'>
       <h2>Fees List</h2>
      <table className="pay-table">
        <thead>
          <tr>
            <th className="pay-name-header">Student Name</th>
            <th className="payp-name-header">Parent Name</th>
            <th className="amount-name-header"> Amount</th>
          </tr>
        </thead>
        <tbody>
          {paymentList
            
            .map((fees) => (
              <tr key={fees._id}>
                <td className="pay-name-cell">{fees.studentName}</td>
                <td className="payp-name-cell">{fees.parentName}</td>
                <td className='amount-name-cell'>{fees.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentList;
