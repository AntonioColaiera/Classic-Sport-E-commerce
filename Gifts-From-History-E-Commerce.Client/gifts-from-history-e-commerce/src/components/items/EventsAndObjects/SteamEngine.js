import React, { useState, useEffect } from "react";
import Card from "../../Card";

export default function SteamEngine() {
  // State to hold the data fetched from the API
  const [data, setData] = useState(null);
  const typology = "Steam Engine"; // Type of item to fetch

  // Fetch data from the API when the component mounts or typology changes
  useEffect(() => {
    fetch(`http://localhost:8080/items/byTypology/${typology}`)
      .then((response) => response.json())
      .then((data) => setData(data)); // Set the fetched data to the state
  }, [typology]); // Trigger the effect when typology changes

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* Render fetched data as cards */}
      {data
        ? data.map((item) => (
            <Card key={item.id} item={item} style={{ margin: "8px" }} />
          ))
        : "Loading..."}{" "}
      {/* Display 'Loading...' while data is being fetched */}
    </div>
  );
}
