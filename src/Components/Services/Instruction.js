import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const Instruction = () => {
  const navigate=useNavigate();
  const handleevent=()=>
  {
    navigate("/eyetestform")
  }
  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.header}>Kindly follow the below basic instructions during the test:</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Answer a few quick questions to help us tailor the test and provide accurate results.</li>
          <li style={styles.listItem}>Find a well-lit environment and adjust your screen brightness to 50%.</li>
          <li style={styles.listItem}>Position your device comfortably: Keep it on a stable surface at eye level and maintain the recommended distance throughout the test.</li>
          <li style={styles.listItem}>Focus on instructions: Each step will have clear instructions on what to do (e.g., covering an eye, clicking buttons).</li>
          <li style={styles.listItem}>Respond honestly: The test relies on your accurate responses about what you see on the screen.</li>
          <li style={styles.listItem}>Take your time: Don't rush through the test. Answer each prompt carefully.</li>
          <li style={styles.listItem}>Kindly avoid any unnecessary movement of your head during the test.</li>
        </ul>
        <button style={styles.button} onClick={handleevent}>Proceed</button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
  },
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'disc',
    textAlign: 'left',
    paddingLeft: '20px',
    marginBottom: '20px',
  },
  listItem: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'navy',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  buttonHover: {
    backgroundColor: 'darkblue',
  },
};

export default Instruction;
