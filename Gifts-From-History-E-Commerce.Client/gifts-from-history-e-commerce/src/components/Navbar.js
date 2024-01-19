import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/GiftsFromHistory.png";
import UserIcon from "./authentication/Authentication";
import Cart from "./cart/Cart";
import Search from "./search/Search";

const Navbar = () => {
  // Define categories and their subcategories
  const categories = [
    {
      name: "Periods",
      subcategories: [
        {
          name: "Prehistory",
          path: "/periods/prehistory",
        },
        {
          name: "Ancient",
          path: "/periods/ancient",
        },
        {
          name: "Medieval",
          path: "/periods/medieval",
        },
        {
          name: "Modern",
          path: "/periods/modern",
        },
        {
          name: "Contemporary",
          path: "/periods/contemporary",
        },
      ],
    },
    {
      name: "Historic Characters",
      subcategories: [
        {
          name: "David Livingston",
          path: "/historic_characters/David_Livingston",
        },
        {
          name: "Socrates",
          path: "/historic_characters/Socrates",
        },
        {
          name: "Martin Luther",
          path: "/historic_characters/Martin_Luther",
        },
        {
          name: "Dinosaurs",
          path: "/historic_characters/dinosaurs",
        },
      ],
    },
    {
      name: "Events And Objects",
      subcategories: [
        {
          name: "Steam Engine",
          path: "/events_and_objects/steam_engine",
        },
      ],
    },
    {
      name: "Product typology",
      subcategories: [
        {
          name: "Sculpture",
          path: "/product_tipology/sculpture",
        },
        {
          name: "T-shirt",
          path: "/product_tipology/t-shirt",
        },
        {
          name: "Poster",
          path: "/product_tipology/poster",
        },
        {
          name: "Hat",
          path: "/product_tipology/hat",
        },
      ],
    },
  ];

  return (
    // Navbar structure using unordered lists
    <nav>
      <Link to='/'>
        <div className='logo-container'>
          <img src={logo} alt='Logo' className='logo-img' />
        </div>
      </Link>
      <div className='search-icon'>
        <Search />
      </div>
      <div className='cart-icon'>
        <Cart />
      </div>
      <div className='user-icon'>
        <UserIcon />
      </div>
      <ul className='categories'>
        {/* Loop through each category */}
        {categories.map((category) => (
          <li key={category.name}>
            {/* Category item */}
            <a href='#' className='category-link'>
              {category.name}
            </a>
            {/* Display subcategories if they exist */}
            {category.subcategories.length > 0 && (
              <ul className='subcategories'>
                {/* Loop through subcategories */}
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.name}>
                    {/* Subcategory item */}
                    <Link to={subcategory.path} className='category-link'>
                      {subcategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
