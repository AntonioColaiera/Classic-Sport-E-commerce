import React from 'react';
import '../styles/Card.css'; 
import { useDispatch } from 'react-redux';
import { addItem } from './redux/actions/cartAction';

const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item)); // Chiamata all'azione addToCart con l'elemento
  };

  return (
    <div className="card">
      <img src={item.image} alt={item.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{item.title}</h2>
        <p className="card-description">Typology: {item.typology}</p>
        <p className="card-description">Price: {item.price}</p>
        {/* Aggiungi altre informazioni dell'item che desideri mostrare */}
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
