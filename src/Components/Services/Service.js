import React from 'react';
import { useNavigate } from 'react-router-dom';
import service from 'C:\\Users\\HP UZER\\Desktop\\demo_class\\eyeplus\\src\\Components\\Assests\\onlineeyetest1.jfif';


const reviews = [
  { name: 'John Doe', rating: 5, comment: 'Excellent service!' },
  { name: 'Jane Smith', rating: 4, comment: 'Very convenient and accurate.' },
  // Add more reviews as needed
];

const faq = [
  { question: 'How does the eye test at home work?', answer: 'The test is conducted using an online platform where you follow simple instructions to complete the test.' },
  { question: 'Is it accurate?', answer: 'Yes, our online eye test is designed to provide accurate results based on your inputs and device settings.' },
  { question: 'How does our online test work?', answer: 'Our online vision test is a quick and convenient way to check your eyesight from the comfort of your home. Here’s what to expect: Vision Health History: Answer a few simple questions about your vision health history. Interactive Exam: Engage in a 5-minute interactive eye exam covering essential visual acuity measurements and prescription checks. Comprehensive Testing: The test includes assessments for near and distance vision, astigmatism, eye dominance, color blindness, contrast sensitivity, and more.' },
  // Add more FAQs as needed
];

export default function Service() {
  const navigate = useNavigate();

  const handleTakeTestClick = () => {
    navigate('/detail-form');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ flex: 1 }}>
        <img src={service} alt="Eye Test Service" style={{ maxWidth: '100%', marginBottom: '20px' }} />
        <section style={{ maxWidth: '600px', width: '100%' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Ratings and Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '16px' }}>{review.name}</h3>
              <p style={{ fontSize: '14px' }}>Rating: {'⭐'.repeat(review.rating)}</p>
              <p style={{ color: 'grey', fontSize: '14px' }}>{review.comment}</p>
            </div>
          ))}
          <h2 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Frequently Asked Questions</h2>
          {faq.map((item, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h3 style={{ fontWeight: 'bold', fontSize: '16px' }}>{item.question}</h3>
              <p style={{ fontSize: '14px' }}>{item.answer}</p>
            </div>
          ))}
        </section>
      </div>
      <div style={{ flex: 0.3, marginLeft: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
        <h2>Online Eye Test</h2>
        <p>Take an eye test at the comfort of your home</p>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ color: 'gold', marginRight: '5px' }}>★★★★☆</span>
          <span style={{ fontSize: '14px', color: 'grey' }}>4.9 (1.2k)</span>
        </div>
        <p style={{ fontSize: '14px', color: 'grey' }}>*Individual should be in good physical health for eye test</p>
        <h3 style={{ marginTop: '20px' }}>What to Expect?</h3>
        <ul style={{ paddingLeft: '20px', fontSize: '14px' }}>
          <li>Quick, hassle-free 5-minute assessment</li>
          <li>Get instant detailed results</li>
          <li>Customized frame recommendation</li>
        </ul>
        <button onClick={handleTakeTestClick} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>Take the test</button>
      </div>
    </div>
  );
}
