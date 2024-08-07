import React, { useState } from 'react';
import '../Admin/Payments.css';
import Sidebar from './Sidebar';

const Payments = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, customer: 'John Doe', amount: 100, date: '2024-07-25', status: 'Completed' },
    { id: 2, customer: 'Jane Smith', amount: 150, date: '2024-07-26', status: 'Pending' },
  ]);

  const [refundForm, setRefundForm] = useState({ transactionId: '', amount: '' });

  const handleRefundSubmit = (e) => {
    e.preventDefault();
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === parseInt(refundForm.transactionId) ? { ...transaction, status: 'Refunded' } : transaction
    );
    setTransactions(updatedTransactions);
    setRefundForm({ transactionId: '', amount: '' });
  };

  return (
    <div>
      <Sidebar/>
    <div className="payments-page">
      <h2>Payments Management</h2>
      <div className="payments-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.customer}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="refund-form">
        <h3>Process Refund</h3>
        <form onSubmit={handleRefundSubmit}>
          <div className="form-group">
            <label htmlFor="transactionId">Transaction ID:</label>
            <input
              type="number"
              id="transactionId"
              value={refundForm.transactionId}
              onChange={(e) => setRefundForm({ ...refundForm, transactionId: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={refundForm.amount}
              onChange={(e) => setRefundForm({ ...refundForm, amount: e.target.value })}
              required
            />
          </div>
          <button type="submit">Process Refund</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Payments;