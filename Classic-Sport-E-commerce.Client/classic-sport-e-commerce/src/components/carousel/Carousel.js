import React, { useState } from "react";
import Prova1 from "../../assets/carousel/Prova1.jpg";
import Prova2 from "../../assets/carousel/prova2.jpg";
import "../../styles/Carousel.css";

export default function Carousel() {
  const items = [
    {
      title: "pROVA",
      description: "pROVAAAAA",
      image: Prova1,
      link: "",
    },
    {
      title: "pROVA2",
      description: "pROVAAAAA2",
      image: Prova2,
      link: "",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const goPrev = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <button onClick={goPrev}>Prev</button>
      <div className="carousel-item" style={{backgroundImage: `url(${items[activeIndex].image})`}}>
        <div className="carousel-content">
          <h2>{items[activeIndex].title}</h2>
          <p>{items[activeIndex].description}</p>
        </div>
      </div>
      <button onClick={goNext}>Next</button>
    </div>
  );
}
