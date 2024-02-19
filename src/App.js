import "./styles/styles.scss";
import Header from "./comps/Header";
import Work from "./scenes/Work";
import React, { useState, useEffect } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const allElements = document.querySelectorAll("*");
    allElements.forEach(element => {
      element.classList.toggle("dark_mode", isDarkMode);
    });
  }, [isDarkMode]);
  const toggleDarkMode = () => {setIsDarkMode(!isDarkMode); console.log("dark mode set")};
  return (
    <div className= {`App ${isDarkMode ? "" : "dark_mode"}`}>
    <nav>
    <div></div>
        <ul>
            <li onClick={toggleDarkMode}>dark mode</li>
        </ul>
      <Header />
    </nav>
      <Work />
    </div>
  );
}

export default App;
