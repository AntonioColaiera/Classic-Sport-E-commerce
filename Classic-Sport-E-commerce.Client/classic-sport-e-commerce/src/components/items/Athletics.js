import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Card from "../Card";

export default function Athletics() {
  const cart = useSelector((state) => state.cart); // Muovi la chiamata useSelector qui dentro
  const [data, setData] = useState(null);
  const typology = "Athletes";  

  useEffect(() => {
    fetch(`http://localhost:8080/items/byTypology/${typology}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [typology]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data ? (
        data.map((item) => (
          <Card key={item.id} item={item} style={{ margin: "8px" }} />
        ))
      ) : (
        "Loading..."
      )}
    </div>
  );
}
