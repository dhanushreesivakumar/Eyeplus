import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// Test content definitions
const eyeTestContent = [
  { id: 1, content: 'E', sizes: [48, 36, 24, 12, 8] },
  { id: 2, content: 'B L C D', sizes: [48, 36, 24, 12, 8] },
  { id: 3, content: '2 6 7 9 2 9', sizes: [48, 36, 24, 12, 8] },
  { id: 4, content: 'l a s d f', sizes: [48, 36, 24, 12, 8] },
  { id: 5, content: '7 3 1 1 2 5 7 8 9', sizes: [48, 36, 24, 12, 8] },
];

const astigmatismTestContent = [
  { id: 1, content: 'Astigmatism Test Image 1', imageUrl: require('../Assests/eye1.jfif') },
  { id: 2, content: 'Astigmatism Test Image 2', imageUrl: require('../Assests/eye2.jfif') },
];

const colorBlindnessTestContent = [
  { id: 1, content: 'Color Blindness Test Image 1', imageUrl: require('../Assests/eye3.jfif') },
  { id: 2, content: 'Color Blindness Test Image 2', imageUrl: require('../Assests/eye4.jfif') },
];

const contrastSensitivityTestContent = [
  { id: 1, content: 'Contrast Sensitivity Test Image 1', imageUrl: require('../Assests/eye5.jfif') },
  { id: 2, content: 'Contrast Sensitivity Test Image 2', imageUrl: require('../Assests/eye6.jfif') },
];

// Function to shuffle arrays
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Main Camera Component
const CameraComponent = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0);
  const [photoTaken, setPhotoTaken] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [eye, setEye] = useState('left'); // Track which eye is being tested
  const [testType, setTestType] = useState('visualAcuity'); // Track the current test type
  const [shuffledTestContent, setShuffledTestContent] = useState([]);

  useEffect(() => {
    setShuffledTestContent(shuffleArray([...eyeTestContent])); // Shuffle the test content initially
  }, []);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
    };

    const startVideo = () => {
      const video = webcamRef.current.video;
      video.play();
      detectFace(video);
    };

    const detectFace = async (video) => {
      const canvas = canvasRef.current;
      const displaySize = { width: video.width, height: video.height };
      faceapi.matchDimensions(canvas, displaySize);

      setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
      }, 100);
    };

    loadModels().then(startVideo);
  }, []);

  const handleProceed = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log('Photo taken:', imageSrc); // You can save the image or send it to the server here
    setPhotoTaken(true);
  };

  const handleVisibilityClick = (visible) => {
    const testContent = testType === 'visualAcuity' ? shuffledTestContent : shuffledTestContent;
    const sizes = testType === 'visualAcuity' ? testContent[currentTestIndex].sizes : [1]; // Default size for non-visual acuity tests

    console.log(
      visible ? 'Clearly visible' : 'Not visible',
      ' for test ',
      testContent[currentTestIndex].content,
      ' at size ',
      sizes[currentSizeIndex]
    );

    if (visible) {
      if (currentSizeIndex < sizes.length - 1) {
        setCurrentSizeIndex(currentSizeIndex + 1);
      } else if (currentTestIndex < testContent.length - 1) {
        setCurrentSizeIndex(0);
        setCurrentTestIndex(currentTestIndex + 1);
      } else {
        handleNextTest();
      }
    } else {
      setShowModal(true);
    }
  };

  const handleNextTest = () => {
    if (eye === 'left') {
      setEye('right');
      resetTest();
    } else {
      switch (testType) {
        case 'visualAcuity':
          setTestType('astigmatism');
          setShuffledTestContent(shuffleArray([...astigmatismTestContent]));
          break;
        case 'astigmatism':
          setTestType('colorBlindness');
          setShuffledTestContent(shuffleArray([...colorBlindnessTestContent]));
          break;
        case 'colorBlindness':
          setTestType('contrastSensitivity');
          setShuffledTestContent(shuffleArray([...contrastSensitivityTestContent]));
          break;
        case 'contrastSensitivity':
          setShowModal(true);
          return;
        default:
          break;
      }
      setEye('left');
      resetTest();
    }
  };

  const resetTest = () => {
    setCurrentTestIndex(0);
    setCurrentSizeIndex(0);
    setPhotoTaken(false);
  };

  const renderTestContent = () => {
    const currentContent = shuffledTestContent[currentTestIndex];
    if (testType === 'visualAcuity') {
      return (
        <div style={{ ...styles.testContent, fontSize: currentContent.sizes[currentSizeIndex] }}>
          {currentContent.content}
        </div>
      );
    } else {
      return (
        <div style={styles.testContent}>
          <img src={currentContent.imageUrl} alt={currentContent.content} style={{ width: '100%', maxWidth: '400px' }} />
        </div>
      );
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.cameraWrapper}>
        <Webcam
          ref={webcamRef}
          style={{ position: 'relative', width: '100%', height: 'auto' }}
          screenshotFormat="image/jpeg"
        />
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
      </div>
      {!photoTaken ? (
        <button onClick={handleProceed} style={styles.proceedButton}>
          Proceed
        </button>
      ) : (
        <div style={styles.testContainer}>
          <h2>Eye Test ({eye.charAt(0).toUpperCase() + eye.slice(1)} Eye)</h2>
          <h3>Current Test: {testType.charAt(0).toUpperCase() + testType.slice(1)}</h3>
          {renderTestContent()}
          <div style={styles.testButtons}>
            {testType === 'visualAcuity' ? (
              <>
                <button onClick={() => handleVisibilityClick(true)} style={styles.testButton}>Clearly Visible</button>
                <button onClick={() => handleVisibilityClick(false)} style={styles.testButton}>Not Visible</button>
              </>
            ) : (
              <>
                <button onClick={() => handleVisibilityClick(true)} style={styles.testButton}>Visible</button>
                <button onClick={() => handleVisibilityClick(false)} style={styles.testButton}>Not Visible</button>
              </>
            )}
          </div>
        </div>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Eye Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for completing the eye test.</p>
          <Button variant="primary" onClick={() => navigate('/doctorappointment')}>Proceed to Next Page</Button>
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
  },
  cameraWrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
  },
  proceedButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  testContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  testContent: {
    margin: '20px 0',
  },
  testButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  testButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default CameraComponent;