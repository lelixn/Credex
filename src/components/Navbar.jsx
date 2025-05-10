// Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav>
      <h1>Navbar</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </nav>
  );
};

export default Navbar;
