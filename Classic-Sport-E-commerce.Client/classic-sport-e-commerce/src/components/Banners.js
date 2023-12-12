import React from "react";
import "../styles/Banners.css";
import MadeInItaly from "../assets/MadeInItaly.png";
import Payments from "../assets/secure-payments.png";
import Research from "../assets/research-icon.png";

const Banner = ({ icon, title, subtitle, iconClassName }) => (
  <div className='banner'>
    <div className='banner-content'>
      <img src={icon} alt={title} className={`banner-icon ${iconClassName}`} />
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  </div>
);

export default function Banners() {
  const bannersData = [
    {
      icon: MadeInItaly,
      title: "Made in Italy",
      subtitle: "Premium materials and design",
      iconClassName: "made-in-italy-icon",
    },
    {
      icon: Research,
      title: "Historical sports research",
      subtitle: "Made by professionals",
      iconClassName: "history-research-icon",
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
        <Banner key={index} {...banner} />
      ))}
    </div>
  );
}
