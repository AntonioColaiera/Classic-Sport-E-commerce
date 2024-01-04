import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../redux/actions/cartAction";
import "./CartItems.css"; // Stili CSS per questa sezione

export default function CartItems() {
  const dispatch = useDispatch(); // Hook useDispatch per l'invio delle azioni Redux
  const cartItems = useSelector((state) => state.cart.cartItems); // Selezione degli elementi nel carrello dallo stato Redux

  // Funzione per gestire l'aggiunta di un elemento al carrello
  const handleAddItem = (item) => {
    dispatch(addItem(item)); // Dispatch dell'azione per aggiungere un elemento al carrello
  };

  // Funzione per gestire la rimozione di un elemento dal carrello
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item)); // Dispatch dell'azione per rimuovere un elemento dal carrello
  };

  const handleIncrementQuantity = (item) => {
    dispatch(updateQuantity(item, item.quantity + 1)); // Aggiorna la quantità dell'elemento nel carrello
  };

  // Funzione per gestire la riduzione della quantità di un elemento nel carrello
  const handleDecrementQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity(item, item.quantity - 1)); // Aggiorna la quantità dell'elemento nel carrello
    } else {
      console.log("La quantità minima è 1");
    }
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
        <img src='/assets/cartEmpty.jpg' alt='The cart is empty' />
        <p>The cart is empty</p> {/* Messaggio se il carrello è vuoto */}
      </div>
    ) : (
      // Se ci sono elementi nel carrello
      <div>
        <p>Total Cart Price: ${calculateTotalPrice()}</p>{" "}
        {/* Visualizza il prezzo totale del carrello */}
        {cartItems.map((item) => (
          <div key={item.id} className='item'>
            {" "}
            {/* Elemento individuale nel carrello */}
            <img
              src={`/assets/items/${item.image}`}
              loading='lazy'
              alt={item.title}
            />
            <h2>{item.title}</h2> {/* Titolo dell'elemento */}
            <p>Typology: {item.typology}</p> {/* Tipologia dell'elemento */}
            <p>Unit Price: ${item.price}</p>{" "}
            {/* Prezzo unitario dell'elemento */}
            <p>Quantity: {item.quantity}</p>{" "}
            {/* Quantità dell'elemento nel carrello */}
            <button onClick={() => handleDecrementQuantity(item)}>
              -
            </button>{" "}
            {/* Pulsante per diminuire la quantità */}
            <button onClick={() => handleIncrementQuantity(item)}>
              +
            </button>{" "}
            {/* Pulsante per aumentare la quantità */}
            <p>Total Price: ${item.total}</p>{" "}
            {/* Prezzo totale per l'elemento (quantità * prezzo unitario) */}
            <button onClick={() => handleRemoveItem(item)}>
              Rimuovi dal carrello
            </button>{" "}
            {/* Pulsante per rimuovere l'elemento dal carrello */}
          </div>
        ))}
      </div>
    )}
  </div>
);
}
