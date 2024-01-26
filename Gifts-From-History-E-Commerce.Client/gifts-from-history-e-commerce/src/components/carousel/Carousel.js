import React, { useState } from "react";
import { CarouselItems } from "./CarouselItems"; // Import the carousel items
import { FaChevronLeft, FaChevronRight, FaCircle, FaRegCircle } from 'react-icons/fa'; // Import icons from react-icons
import "./Carousel.css";
import { Link } from "react-router-dom";

export default function Carousel() {
  // State to track the active index of the carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to navigate to the next slide
  const goNext = () => {
    setActiveIndex((activeIndex + 1) % CarouselItems.length);
  };

  // Function to navigate to the previous slide
  const goPrev = () => {
    setActiveIndex((activeIndex - 1 + CarouselItems.length) % CarouselItems.length);
  };

  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      {/* Render the carousel item with dynamic background image */}
      <div className="carousel-item" style={{backgroundImage: `url(${CarouselItems[activeIndex].image})`}}>
        {/* Button to navigate to the previous slide */}
        <button className="carousel-button prev" onClick={goPrev}><FaChevronLeft /></button>
        {/* Content of the carousel item */}
        <div className="carousel-content">
          <h2 className="name">{CarouselItems[activeIndex].title}</h2>
          <p className="description">{CarouselItems[activeIndex].description}</p>
          {/* Button to navigate to a specific page related to the carousel item */}
          <button>
            <Link to={`/${CarouselItems[activeIndex].link}`} className="linkItem">SEE IT BETTER!</Link>
          </button>
        </div>
        {/* Button to navigate to the next slide */}
        <button className="carousel-button next" onClick={goNext}><FaChevronRight /></button>
        {/* Indicators to navigate to specific slides */}
        <div className="carousel-indicator">
          {CarouselItems.map((item, index) => (
            <span key={index} onClick={() => goToSlide(index)}>
              {/* Show active and inactive indicators */}
              {index === activeIndex ? <FaCircle /> : <FaRegCircle />}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
