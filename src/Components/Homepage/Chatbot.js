import React, { useState } from 'react';
import './Chatbot.css';
import { FaRobot } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const qAndA = [
    {
      question: 'What are the types of spectacle lenses?',
      answer: 'There are several types of spectacle lenses including single vision lenses, bifocal lenses, progressive lenses, and photochromic lenses.',
    },
    {
      question: 'How do I choose the right frame size?',
      answer: 'To choose the right frame size, you should consider the width of your face, the bridge of your nose, and the length of your temples. Trying on different frames can help you find the best fit.',
    },
    {
      question: 'Can I get my spectacles delivered?',
      answer: 'Yes, many optical stores offer home delivery services for spectacles. You can check with the store where you purchase your glasses.',
    },
    {
      question: 'What is the difference between plastic and glass lenses?',
      answer: 'Plastic lenses are lighter and less prone to shattering compared to glass lenses, but glass lenses tend to be more scratch-resistant.',
    },
    {
      question: 'How often should I get my eyes checked?',
      answer: 'It is recommended to have an eye examination every 1-2 years, or as advised by your optometrist, to ensure your prescription is up-to-date.',
    },
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newMessage = { text: input, isUser: true };
      setMessages([...messages, newMessage]);

      // Find matching answer
      const matchedQnA = qAndA.find((qa) =>
        input.toLowerCase().includes(qa.question.toLowerCase())
      );

      setTimeout(() => {
        if (matchedQnA) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: matchedQnA.answer, isUser: false },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: `Sorry, I don't have an answer for that.`, isUser: false },
          ]);
        }
      }, 1000);

      setInput('');
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-header" onClick={toggleChat}>
        <FaRobot /> Chat with us
      </div>
      {isOpen && (
        <div className="chatbot-body">
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${message.isUser ? 'user' : 'bot'}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
