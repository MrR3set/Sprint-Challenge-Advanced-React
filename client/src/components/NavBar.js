import React, { useState } from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage"
import {useDarkMode} from "../hooks/useDarkMode"


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode("darkmode-storage",false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Womens world cup top searches</h1>
      <div className="dark-mode__toggle" onClick={toggleMode}>
        <div
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
