import React from 'react';
import '../styles/Card.css'; // Assicurati che il percorso sia corretto
import { useDispatch } from 'react-redux';
import { addItem } from './redux/actions/cartAction';

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="card">
      <img src={item.image} alt={item.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{item.title}</h2>
        <p className="card-description">
          Typology: {item.typology}
        </p>
        <p className="card-description">
          Price: ${item.price}
        </p>
        {/* Aggiungi altre informazioni sull'elemento che desideri visualizzare */}
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
