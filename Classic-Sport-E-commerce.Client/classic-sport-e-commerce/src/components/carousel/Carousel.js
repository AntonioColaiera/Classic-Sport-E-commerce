import React, { useState } from "react";
import { CarouselItems } from "./CarouselItems";
import "../../styles/Carousel.css";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((activeIndex + 1) % CarouselItems.length);
  };

  const goPrev = () => {
    setActiveIndex((activeIndex - 1 + CarouselItems.length) % CarouselItems.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-item" style={{backgroundImage: `url(${CarouselItems[activeIndex].image})`}}>
      <button onClick={goPrev}>Prev</button>
        <div className="carousel-content">
          <h2>{CarouselItems[activeIndex].title}</h2>
          <p>{CarouselItems[activeIndex].description}</p>
          <bottom>Prova</bottom>
          <button onClick={goNext}>Next</button>
        </div>
      </div>
     
    </div>
  );
}
