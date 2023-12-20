import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { addItem } from '../redux/actions/cartAction';

export default function Athletics() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [data, setData] = useState(null);
  const typology = "Athletes";  

  useEffect(() => {
    fetch(`http://localhost:8080/items/byTypology/${typology}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [typology]);

  const handleAddToCart = (item) => {
    dispatch(addItem(item)); // Chiamata all'azione addToCart con l'elemento
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data ? (
        data.map((item) => (
          <div key={item.id} style={{ margin: "8px" }}>
            <Card item={item} />
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))
      ) : (
        "Loading..."
      )}
    </div>
  );
}
