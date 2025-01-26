import React from 'react';
import './../css/Website.css';

const Website = () => {
  return (
    <div className="website-container">
      <h2>www.lucianadiaz.xyz</h2>
      <p>Coded entirely from scratch.</p>
      <figure className="website-image">
        <img
          src="../../assets/images/websiteV1.png" // Adjust the path to your image
          alt="Website Screenshot"
          className="img"
        />
        <figcaption>v1 of lucianadiaz.xyz</figcaption>
      </figure>
    </div>
  );
};

export default Website;
