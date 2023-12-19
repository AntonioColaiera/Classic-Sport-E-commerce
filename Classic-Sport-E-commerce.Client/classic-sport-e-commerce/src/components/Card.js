
import React from 'react';
import '../styles/Card.css'; 

const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{item.title}</h2>
        <p className="card-description">Typology: {item.typology}</p>
        <p className="card-description">Price: {item.price}</p>
        {/* Aggiungi altre informazioni dell'item che desideri mostrare */}
      </div>
    </div>
  );
};

export default Card;