import React, { useEffect, useState } from "react";

export default function Athletics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/items/all")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data
        ? data.map((item) => <div key={item.id}>{item.information}</div>)
        : "Loading..."}
    </div>
  );
}
