import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './Navbar/navbar';

// Define the theme object
const theme = {
  colors: {
    white: '#ffffff',
    btn: '#0a638f', // Example button color
    // Add other colors or properties as needed
  },
};

// Define the styled component
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type='submit'] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (isAuthenticated && user) {
      setUsername(user.name);
      setEmail(user.email);
    }
  }, [isAuthenticated, user]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Wrapper style={{ marginTop: '-145px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0076858199666!2d76.93791411533153!3d10.934472292213707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8572eb6dc1475%3A0x4a1ef38e4db1b79f!2sKovaipudur%2C%20Tamil%20Nadu%20641120!5e0!3m2!1sen!2sin!4v1664815246439!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/xdojzzlj"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                required
                autoComplete="off"
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                autoComplete="off"
                required
              />

              <textarea
                name="Message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
                placeholder="Enter your message"
              ></textarea>

              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Contact;
