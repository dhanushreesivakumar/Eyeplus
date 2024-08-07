import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EyeTestForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleOptionChange = (e) => {
    if (e.target.name === 'q4' && e.target.value === 'yes') {
      alert('Please consult a doctor if you have any medical conditions.');
      setIsDisabled(true);
    } else if (e.target.name === 'q4' && e.target.value === 'no') {
      setIsDisabled(false);
    }
  };
  const navigate = useNavigate();
  const handelEvent = () =>{
     navigate("/CameraComponent");
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>Eye<span style={styles.plus}>+</span> Eyetest</h1>
      </header>
      <div style={styles.formContainer}>
        <h2 style={styles.formHeader}>Fill Out Your Details</h2>
        <form style={styles.form}>
          <div style={styles.question}>
            <p>1. Have you ever worn eyeglasses or contact lenses for vision correction, either for regular use or for sightseeing?</p>
            <label>
              <input type="radio" name="q1" value="yes" onChange={handleOptionChange} /> Yes
            </label><br></br>
            <label>
              <input type="radio" name="q1" value="no" onChange={handleOptionChange} /> No
            </label>
          </div>
          <div style={styles.question}>
            <p>2. Have you ever had an eye power higher than -4/+4?</p>
            <label>
              <input type="radio" name="q2" value="yes" onChange={handleOptionChange} /> Yes
            </label><br></br>
            <label>
              <input type="radio" name="q2" value="no" onChange={handleOptionChange} /> No
            </label>
          </div>
          <div style={styles.question}>
            <p>3. Do you feel blurry vision when looking at objects in the distance?</p>
            <label>
              <input type="radio" name="q3" value="yes" onChange={handleOptionChange} /> Yes
            </label><br></br>
            <label>
              <input type="radio" name="q3" value="no" onChange={handleOptionChange} /> No
            </label>
          </div>
          <div style={styles.question}>
            <p>4. Have you ever been diagnosed with any medical conditions?</p>
            <label>
              <input type="radio" name="q4" value="yes" onChange={handleOptionChange} /> Yes
            </label><br></br>
            <label>
              <input type="radio" name="q4" value="no" onChange={handleOptionChange} /> No
            </label>
          </div>
          <div style={styles.question}>
            <p>5. Do you feel headaches or eyestrain?</p>
            <label>
              <input type="radio" name="q5" value="yes" onChange={handleOptionChange} /> Yes
            </label><br></br>
            <label>
              <input type="radio" name="q5" value="no" onChange={handleOptionChange} /> No
            </label>
          </div>
          <button type="submit" style={styles.proceedButton} disabled={isDisabled} onClick={handelEvent}>Proceed</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'navy',
    marginLeft: '200px'
  },
  plus: {
    color: 'red',
  },
  formContainer: {
    textAlign: 'left',
  },
  formHeader: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  question: {
    marginBottom: '20px',
  },
  proceedButton: {
    padding: '10px 20px',
    backgroundColor: 'navy',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default EyeTestForm;