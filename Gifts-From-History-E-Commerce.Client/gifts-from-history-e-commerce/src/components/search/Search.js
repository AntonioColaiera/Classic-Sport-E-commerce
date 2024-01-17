import React, { useState, useEffect, useRef } from 'react';
import { IoMdSearch } from 'react-icons/io';
import './Search.css'; // 

export default function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e) => {
    // Implementa la logica di ricerca qui, utilizzando il valore di 'e.target.value'
    console.log('Ricerca:', e.target.value);
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container" ref={searchRef}>
      <div onClick={handleSearchIconClick}>
        <IoMdSearch />
      </div>

      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>
        </div>
      )}
    </div>
  );
}


