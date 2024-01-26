import React from "react";
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header"> 
      <div className="links-left">
        <a href="#">Philosophy </a>
        <a href="#">Materials</a>
      </div>
      <div className="links-right">
        <a href="#">Free shipping*</a>
        <a href="#">Returns in 100 days</a>
      </div>
      {/* others elements*/}
    </header>
  );
};

export default Header;
