import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import doctor from '../Assests/eye7.jpg';

const DoctorAppointment = () => {
  const [visibleAnswers, setVisibleAnswers] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const toggleAnswerVisibility = (index) => {
    if (visibleAnswers.includes(index)) {
      setVisibleAnswers(visibleAnswers.filter((i) => i !== index));
    } else {
      setVisibleAnswers([...visibleAnswers, index]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  const closeModal = () => {
    setShowConfirmation(false);
    navigate('/');
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      backgroundColor: '#f4f4f9',
      borderRadius: '8px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    },
    faqSection: {
      width: '60%',
      marginRight: '20px',
    },
    formSection: {
      width: '35%',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '26px',
      color: '#007BFF',
    },
    questionContainer: {
      marginBottom: '15px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      border: '1px solid #007BFF',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      backgroundColor: '#fff',
    },
    questionContainerHover: {
      backgroundColor: '#e7f3ff',
      transform: 'scale(1.02)',
    },
    question: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#007BFF',
    },
    answer: {
      fontSize: '16px',
      marginTop: '10px',
      overflow: 'hidden',
      maxHeight: '0',
      transition: 'max-height 0.5s ease, opacity 0.5s ease',
      opacity: '0',
      paddingLeft: '10px',
      borderLeft: '2px solid #007BFF',
    },
    answerVisible: {
      maxHeight: '200px',
      opacity: '1',
    },
    arrow: {
      fontSize: '16px',
      marginLeft: '10px',
      transition: 'transform 0.3s',
    },
    arrowUp: {
      transform: 'rotate(-180deg)',
    },
    formHeading: {
      marginBottom: '15px',
      fontSize: '22px',
      textAlign: 'center',
      color: '#007BFF',
    },
    formGroup: {
      marginBottom: '15px',
    },
    formLabel: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
    },
    formInput: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '14px',
      outline: 'none',
      transition: 'border-color 0.3s',
    },
    formInputFocus: {
      borderColor: '#007BFF',
    },
    formButton: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
    formButtonHover: {
      backgroundColor: '#0056b3',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    modalButton: {
      marginTop: '10px',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
    modalButtonHover: {
      backgroundColor: '#0056b3',
    },
  };

  const questions = [
    {
      question: 'Q1: How can I book an appointment?',
      answer: 'A: You can book an appointment by calling our office or using our online booking system on our website.',
    },
    {
      question: 'Q2: What are the available timings for appointments?',
      answer: 'A: Appointments are available from 9 AM to 5 PM, Monday to Friday. Weekend appointments are subject to availability.',
    },
    {
      question: 'Q3: What information do I need to provide when booking an appointment?',
      answer: 'A: You will need to provide your name, contact information, and a brief description of the reason for your visit.',
    },
    {
      question: 'Q4: Can I cancel or reschedule my appointment?',
      answer: 'A: Yes, you can cancel or reschedule your appointment by contacting our office at least 24 hours in advance.',
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.faqSection}>
        <img src={doctor} alt="Doctor" style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />
        <h1 style={styles.heading}>Doctor Appointment FAQ</h1>
        {questions.map((q, index) => (
          <div key={index}>
            <div
              style={{
                ...styles.questionContainer,
                ...(visibleAnswers.includes(index) && styles.questionContainerHover),
              }}
              onClick={() => toggleAnswerVisibility(index)}
            >
              <span style={styles.question}>{q.question}</span>
              <span
                style={{
                  ...styles.arrow,
                  ...(visibleAnswers.includes(index) && styles.arrowUp),
                }}
              >
                ▼
              </span>
            </div>
            <div
              style={{
                ...styles.answer,
                ...(visibleAnswers.includes(index) && styles.answerVisible),
              }}
            >
              {q.answer}
            </div>
          </div>
        ))}
      </div>
      <div style={styles.formSection}>
        <h2 style={styles.formHeading}>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.formLabel} htmlFor="name">Name</label>
            <input
              style={styles.formInput}
              type="text"
              id="name"
              name="name"
              required
              onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel} htmlFor="email">Email</label>
            <input
              style={styles.formInput}
              type="email"
              id="email"
              name="email"
              required
              onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel} htmlFor="phone">Phone</label>
            <input
              style={styles.formInput}
              type="tel"
              id="phone"
              name="phone"
              required
              onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel} htmlFor="address">Address</label>
            <textarea
              style={styles.formInput}
              id="address"
              name="address"
              required
              onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
              onBlur={(e) => (e.target.style.borderColor = '#ddd')}
            ></textarea>
          </div>
          <button
            style={styles.formButton}
            type="submit"
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007BFF')}
          >
            Book an Appointment
          </button>
        </form>
      </div>
      {showConfirmation && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <p>Thank you for booking. Our staff nearby will contact you for further information.</p>
            <button
              style={styles.modalButton}
              onClick={closeModal}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#007BFF')}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorAppointment;
