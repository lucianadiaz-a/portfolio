import React from 'react';
import './css/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>
        I’m constantly online but mostly on{' '}
        <a
          href="https://www.linkedin.com/in/luciana-diaz-albadan/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
      </p>
      <p>Shoot me a DM if you want to chat</p>
    </div>
  );
};

export default Contact;
