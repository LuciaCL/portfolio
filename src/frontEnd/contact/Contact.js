import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="section contact" id="contact">
      <div className="row">
        <div className="description">
          <h3>Contact</h3>
          <a href="mailto:luciacoucelamas@gmail.com" className="button">
            Send me an email
          </a>
          <div className="nav">
            <ul className="menu">
              <li>
                <a
                  className="social-media"
                  href="https://github.com/LuciaCL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </li>
              <li>
                <a
                  className="social-media"
                  href="https://www.linkedin.com/in/lucia-couce-lamas-86920956/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}