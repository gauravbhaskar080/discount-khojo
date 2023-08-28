import React from 'react';
import './Card.css'; 

const Card = ({ imageSrc, title, description, price }) => {
  
  const descriptionPoints = description.map((point, index) => (
    <li key={index}>{point}</li>
  ));

  return (
    <div className="card">
      <div className="card-left">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="card-middle">
        <div className="card-title">{title}</div>
        <div className="card-description">
          <ul>{descriptionPoints}</ul>
        </div>
      </div>
      <div className="card-right">
        <div className="card-price">₹{price}</div>
      </div>
    </div>
  );
};

export default Card;
