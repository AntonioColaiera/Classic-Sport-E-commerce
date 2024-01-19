import React, { useState, useEffect } from "react";

import Card from "../../Card";

export default function DavidLivingston() {
  const [data, setData] = useState(null);
  const typology = "David Livingston";

  useEffect(() => {
    fetch(`http://localhost:8080/items/byTypology/${typology}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [typology]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data
        ? data.map((item) => (
            <Card key={item.id} item={item} style={{ margin: "8px" }} />
          ))
        : "Loading..."}
    </div>
  );
}
