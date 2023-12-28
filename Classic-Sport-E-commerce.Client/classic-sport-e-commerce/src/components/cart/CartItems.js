import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/actions/cartAction';
import './CartItems.css'; // Stili CSS per questa sezione

export default function CartItems() {
  const dispatch = useDispatch(); // Hook useDispatch per l'invio delle azioni Redux
  const cartItems = useSelector(state => state.cart.cartItems); // Selezione degli elementi nel carrello dallo stato Redux

  // Funzione per gestire l'aggiunta di un elemento al carrello
  const handleAddItem = item => {
    dispatch(addItem(item)); // Dispatch dell'azione per aggiungere un elemento al carrello
  };

  // Funzione per gestire la rimozione di un elemento dal carrello
  const handleRemoveItem = item => {
    dispatch(removeItem(item)); // Dispatch dell'azione per rimuovere un elemento dal carrello
  };

  // Funzione per calcolare il prezzo totale del carrello
  const calculateTotalPrice = () => {
    // Riduce gli elementi nel carrello per calcolare il prezzo totale
    return cartItems.reduce((total, item) => total + item.total, 0);
  };

  return (
    <div>
      {cartItems.length === 0 ? ( // Condizione: se il carrello è vuoto
        <div>
               <img src="/assets/cartEmpty.jpg" alt="The cart is empty" />
          <p>The cart is empty</p> {/* Messaggio se il carrello è vuoto */}
        </div>
      ) : ( // Se ci sono elementi nel carrello
        <div>
          <p>Total Cart Price: ${calculateTotalPrice()}</p> {/* Visualizza il prezzo totale del carrello */}
          {cartItems.map(item => ( // Mappa gli elementi nel carrello per mostrarli
            <div key={item.id} className='item'> {/* Elemento individuale nel carrello */}
              <img
                src={require(`../../assets/items/${item.image}`)} // Immagine dell'elemento nel carrello
                loading='lazy'
                alt={item.title}
              />
              <h2>{item.title}</h2> {/* Titolo dell'elemento */}
              <p>Typology: {item.typology}</p> {/* Tipologia dell'elemento */}
              <p>Unit Price: ${item.price}</p> {/* Prezzo unitario dell'elemento */}
              <p>Quantity: {item.quantity}</p> {/* Quantità dell'elemento nel carrello */}
              <p>Total Price: ${item.total}</p> {/* Prezzo totale per l'elemento (quantità * prezzo unitario) */}
              <button onClick={() => handleRemoveItem(item)}>Rimuovi dal carrello</button> {/* Pulsante per rimuovere l'elemento dal carrello */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
