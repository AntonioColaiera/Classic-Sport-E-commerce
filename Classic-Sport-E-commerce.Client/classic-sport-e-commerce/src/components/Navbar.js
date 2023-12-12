import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/ClassicSportGift.png";
import UserIcon from "./authentication/Authentication";
import Cart from "./cart/Cart";
import Search from "./search/Search";

const Navbar = () => {
  // Define categories and their subcategories
  const categories = [
    {
      name: "Sports",
      subcategories: [
        {
          name: "Sottocategoria 1",
        },
        {
          name: "Sottocategoria 2",
        },
      ],
    },
    {
      name: "Historic Athlets",
      subcategories: [],
    },
    {
      name: "World Events",
      subcategories: [
        {
          name: "Sottocategoria 1",
        },
      ],
    },
    {
      name: "Products typology",
      subcategories: [],
    },
  ];

  return (
    // Navbar structure using unordered lists
    <nav className='NAvbar'>
      <div className='logo-container'>
        <img src={logo} alt='Logo' className='logo-img' />
      </div>
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
                    <a href='#' className='category-link'>
                      {subcategory.name}
                    </a>
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
