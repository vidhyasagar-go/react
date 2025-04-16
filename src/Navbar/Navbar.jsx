import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { ThemeContext } from '../Themes/ThemeContext'; // Import ThemeContext
import './Navbar.css';
import ailogodark from '../assets/ailogodark.png'; // Dark logo image
import ailogolight from '../assets/ailogolight.png'; // Light logo image
import { IoSunny } from 'react-icons/io5'; // Import Sun Icon
import { IoMoonSharp } from "react-icons/io5"; // Import Moon Icon

const NavbarComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use context to get current theme and toggle function
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To toggle the mobile menu
  const [isRotating, setIsRotating] = useState(false); // State for managing rotation animation

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when theme is toggled on mobile view
  const handleThemeToggle = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false); // Close the menu on mobile when theme is toggled
    }
    setIsRotating(true); // Start rotation animation
    setTimeout(() => {
      toggleTheme(); // Toggle theme after rotation ends
      setIsRotating(false); // Reset rotation state after transition
    }, 500); // 500ms corresponds to the duration of the rotation
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Dynamically render the logo based on the current theme */}
        <Link to="/" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>
          <img
            src={theme === 'light' ? ailogolight : ailogodark}
            alt="Logo"
            className="navbar-logo"
          />
        </Link>
      </div>

      {/* Links Section - Dynamic rendering of navbar links */}
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Home</Link>
        <Link to="/about" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>About</Link>
        <Link to="/services" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Services</Link>
        <Link to="/faq" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>FAQs</Link>
        <Link
          to="/blog"
          onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}
        >
          Blog
        </Link>
        <Link to="/contact" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Contact</Link>

        {/* Theme Toggle Icon */}
        <div
          className={`themeicon ${isRotating ? 'rotate' : ''}`}
          onClick={handleThemeToggle} // Call the handleThemeToggle function
        >
          {theme === 'light' ? (
            <IoSunny className={`themeicon ${isRotating ? 'show' : ''}`} />
          ) : (
            <IoMoonSharp className={`themeicon ${isRotating ? 'show' : ''}`} />
          )}
        </div>
      </div>

      {/* Right side - Hamburger button */}
      <div className="navbar-right">
        {/* Hamburger icon for mobile */}
        <i
          className="bx bx-menu"
          style={{ fontSize: '2.5rem', cursor: 'pointer' }}
          onClick={toggleMenu}
        ></i>
      </div>
    </nav>
  );
};

export default NavbarComponent;
