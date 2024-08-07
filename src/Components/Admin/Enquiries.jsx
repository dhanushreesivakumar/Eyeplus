import React, { useState } from 'react';
import '../Admin/Enquiries.css';
import Sidebar from '../Admin/Sidebar';

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Inquiry about product X', status: 'Pending' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'Request for a quote', status: 'Pending' },
  ]);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnquiries([...enquiries, { ...form, id: enquiries.length + 1, status: 'Pending' }]);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <Sidebar/>
    <div className="enquiries-page">
      <h2>Customer Enquiries</h2>
      <div className="enquiries-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry) => (
              <tr key={enquiry.id}>
                <td>{enquiry.id}</td>
                <td>{enquiry.name}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.message}</td>
                <td>{enquiry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="enquiry-form">
        <h3>Add New Enquiry</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{width:'100%'}}
              required
            />
          </div>
          {/* <div className='form-group'>
              <label htmlFor='message'>Status:</label>
              <input
                type='text'
                id='text'
                value={form.text}
                onChange={(e)=>setForm({ ...form, text: e.target.value})}
                required
              />
          </div> */}
          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Enquiries;