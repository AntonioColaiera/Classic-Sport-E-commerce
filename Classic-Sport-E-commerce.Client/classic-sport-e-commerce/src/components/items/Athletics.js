import React, { useEffect, useState } from "react";
import Card from "../Card";

export default function Athletics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/items/all")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

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
