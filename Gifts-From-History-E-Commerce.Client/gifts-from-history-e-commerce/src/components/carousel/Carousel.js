import React, { useState } from "react";
import { CarouselItems } from "./CarouselItems";
import { FaChevronLeft, FaChevronRight, FaCircle, FaRegCircle } from 'react-icons/fa'; // Importa le icone da react-icons
import "../../styles/Carousel.css";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((activeIndex + 1) % CarouselItems.length);
  };

  const goPrev = () => {
    setActiveIndex((activeIndex - 1 + CarouselItems.length) % CarouselItems.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-item" style={{backgroundImage: `url(${CarouselItems[activeIndex].image})`}}>
        <button className="carousel-button prev" onClick={goPrev}><FaChevronLeft /></button>
        <div className="carousel-content">
          <h2>{CarouselItems[activeIndex].title}</h2>
          <p>{CarouselItems[activeIndex].description}</p>
          <button>Prova</button>
        </div>
        <button className="carousel-button next" onClick={goNext}><FaChevronRight /></button>
        <div className="carousel-indicator">
          {CarouselItems.map((item, index) => (
            <span key={index} onClick={() => goToSlide(index)}>
              {index === activeIndex ? <FaCircle /> : <FaRegCircle />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
