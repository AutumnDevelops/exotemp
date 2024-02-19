import React from 'react';
import logo from "../assets/logo.png";
import logo_white from "../assets/logo_white.png";
const Header = () => {
  const isDarkMode = document.body.classList.contains("dark_mode");
  const logoSource = isDarkMode ? logo : logo_white;
  return (
    <header>
    <div>
        <h1>ezra alexander</h1>
        <h2>i make abstract art</h2>
    </div>
    <div>
    <img src={logoSource} alt="logo" />
    </div>
    </header>
  )
}

export default Header