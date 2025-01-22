import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, image }) => {
  return (
    <div className="card">
      <Link to={`/work/projects/${id}`}>
        <img src={image} alt={name} className="card-image" />
        <div className="card-title">{name}</div>
      </Link>
    </div>
  );
};

export default Card;
