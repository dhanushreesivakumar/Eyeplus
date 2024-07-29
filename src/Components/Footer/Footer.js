import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <button className="btn hireme-btn">
              <NavLink to="/"><a href="tel:+123-456-7890" className="nav-contact"> Contact: +123-456-7890</a></NavLink>
            </button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Eye Plus</h3>
            <p>
              Eye + is an innovative e-commerce platform designed to provide an extensive selection of eyeglasses and sunglasses, ensuring a seamless shopping experience for customers looking to find the perfect eyewear that suits their style and needs.
            </p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" name="email" placeholder="YOUR E-MAIL" />
              <input type="submit" value="subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://github.com/Preetiraj3697" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/paarthavshah3697/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/preetiraj3697/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icons" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 7397206862</h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} 💟 DELVINA M. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 70vw;
    margin: auto;
    padding: 1.5rem 3rem; /* Adjusted padding */
    background-color: #f0f0f0;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(25%);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .grid {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        &:last-child {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
      }
    }

    h3 {
      font-size: 1.2rem; /* Reduced font size */
    }

    .btn {
      font-size: 0.9rem; /* Reduced font size */
    }
  }

  footer {
    padding: 3rem 0; /* Reduced padding */
    background-color:#528ddc;
    color: #fff;

    h3 {
      margin-bottom: 1rem;
      font-size: 1.2rem; /* Reduced font size */
    }

    p {
      color: #fff;
      margin: 0.5rem 0;
      font-size: 0.9rem; /* Reduced font size */
    }

    .container {
      display: grid;
      gap: 1.5rem; /* Adjusted gap */
    }

    .grid-four-column {
      grid-template-columns: repeat(4, 1fr);
    }

    .grid-two-column {
      grid-template-columns: repeat(2, 1fr);
    }

    .footer-subscribe, .footer-social, .footer-contact {
      margin-top: 1rem; /* Adjusted margin-top */
    }

    .footer-social--icons {
      display: flex;
      gap: 0.8rem; /* Adjusted gap */

      div {
        padding: 0.3rem; /* Reduced padding */
        border-radius: 50%;
        border: 2px solid #fff;

        .icons {
          color: #fff;
          font-size: 1.2rem; /* Reduced font size */
          cursor: pointer;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem; /* Adjusted gap */
    }

    input[type="email"] {
      padding: 0.5rem;
      border: none;
      border-radius: 0.3rem;
      font-size: 0.9rem; /* Reduced font size */
    }

    input[type="submit"] {
      padding: 0.5rem;
      border: none;
      border-radius: 0.3rem;
      background-color: #fff;
      color: #222;
      cursor: pointer;
      font-size: 0.9rem; /* Reduced font size */
    }
  }

  .footer-bottom--section {
    padding-top: 2rem;

    hr {
      margin-bottom: 1rem;
      color: #fff;
      height: 0.1px;
      border: none;
      background-color: #fff;
    }

    .grid-two-column {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        margin: 0;
      }
    }

    p {
      font-size: 0.9rem; /* Reduced font size */
    }
  }

  @media (max-width: 768px) {
    .contact-short {
      max-width: 90vw;
      padding: 1.5rem;
      transform: translateY(0%);
      text-align: center;

      .grid {
        flex-direction: column;
        align-items: center;

        div {
          &:last-child {
            justify-content: center;
          }
        }
      }
    }

    footer {
      padding: 3rem 0;

      .grid-four-column {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .footer-bottom--section {
        padding-top: 1.5rem;
      }
    }

    .footer-bottom--section {
      .grid-two-column {
        flex-direction: column;
        text-align: center;
        gap: 1rem;

        p {
          margin: 0.5rem 0;
        }
      }
    }
  }
`;

export default Footer;
