import React from "react";
import "../styles/Banners.css";
import MadeInItaly from "../assets/MadeInItaly.png";
import Payments from "../assets/secure-payments.png";
import Research from "../assets/research-icon.png";

const Banner = ({ icon, title, subtitle, iconClassName }) => (
  <div className='banner'>
    <div className='banner-content'>
      <img src={icon} alt={title} className={`banner-icon ${iconClassName}`} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  
);

export default function Banners() {
  const bannersData = [
    {
      icon: Research,
      title: "Historical sports research",
      subtitle: "Made by professionals",
      iconClassName: "history-research-icon",
    },
    {
      icon: MadeInItaly,
      title: "Design made in Italy",
      subtitle: "Premium materials",
      iconClassName: "made-in-italy-icon",
    },
    {
      icon: Payments,
      title: "Secure Payments",
      subtitle: "Absolutely no surprises",
      iconClassName: "Payments-icon",
    },
  ];

  return (
    <div className='banner-container'>
      {bannersData.map((banner, index) => (
        <React.Fragment key={index}>
          <Banner {...banner} />
          {index < bannersData.length - 1 && <div className="vertical-separator" />}
        </React.Fragment>
      ))}
    </div>
  );
}
