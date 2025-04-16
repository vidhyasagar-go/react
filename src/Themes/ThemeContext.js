// src/Themes/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create ThemeContext
export const ThemeContext = createContext();

// ThemeProvider component to manage and provide theme
export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('theme') || 'light'; // Load saved theme or default to light
  const [theme, setTheme] = useState(savedTheme);

  // Toggle theme function and store in localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Apply theme to body on every theme change
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
