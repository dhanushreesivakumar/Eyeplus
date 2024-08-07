import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import zoom from '../Assests/Zoom.png';

const SecondTest = () => {
  const webcamRef = useRef(null);
  const navigate = useNavigate();
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const startVideo = () => {
      const video = webcamRef.current.video;
      video.play();
    };

    startVideo();
  }, []);

  const handleProceed = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/doctorappointment'); // Change this path to your desired route
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 1));
  };
  

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div style={styles.container}>
      <div style={styles.cameraWrapper}>
        <Webcam
          ref={webcamRef}
          style={styles.webcam}
          screenshotFormat="image/jpeg"
        />
      </div>
      <div style={styles.box}>
        <div style={styles.testContainer}>
          <h5 style={{ fontFamily: 'cursive' }}>
            Choose the part where you can see a more darker line
          </h5>
          <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
          <div style={styles.zoomableContent}>
            <div style={{ ...styles.testImageContainer, transform: `scale(${zoomLevel})` }}>
              <img src={zoom} alt="Vision Test" style={styles.testImage} />
            </div>
            <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
            <div style={styles.zoomButtons}>
              <button onClick={handleZoomIn} style={styles.zoomButton}>+ Zoom In</button>
              <button onClick={handleZoomOut} style={styles.zoomButton}>- Zoom Out</button>
            </div>
          </div>
          <div style={styles.optionContainer}>
            {['A', 'B', 'C', 'D', 'None'].map((option) => (
              <div
                key={option}
                style={selectedOption === option ? styles.selectedOption : styles.option}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <button onClick={handleProceed} style={styles.proceedButton}>Proceed</button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body style={{ textAlign: 'center' }}>
          <img src="https://img.icons8.com/ios-filled/100/4caf50/checked.png" alt="success icon" />
          <h4>Eye Exam Report</h4>
          <p>Congratulations! Your report has been generated successfully.</p>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '200vh',
    padding: '20px',
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
  cameraWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '20px',
  },
  webcam: {
    width: '100%',
    height: 'auto',
  },
  box: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '100%',
    maxWidth: '600px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden', // Ensure that zoomed content doesn't overflow
  },
  testContainer: {
    marginTop: '20px',
    textAlign: 'center',
    width: '100%',
  },
  zoomableContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  testImageContainer: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    position: 'relative',
    background: 'white',
    marginBottom: '20px',
    overflow: 'hidden', // Ensure the zoomed image doesn't overflow
  },
  testImage: {
    width: '100%', // Adjusted to ensure it scales properly
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },
  zoomButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '5px',
    marginBottom: '20px',
  },
  zoomButton: {
    padding: '5px 10px',
    backgroundColor: 'navy',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  optionContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  option: {
    padding: '5px 10px',
    backgroundColor: 'lightgray',
    color: 'black',
    border: '1px solid gray',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  selectedOption: {
    padding: '5px 10px',
    backgroundColor: 'navy',
    color: 'white',
    border: '1px solid gray',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  proceedButton: {
    marginTop: '20px',
    padding: '5px 10px',
    backgroundColor: 'navy',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default SecondTest;
