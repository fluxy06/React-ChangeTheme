import React, { useState, useEffect } from 'react';
import ButtonForm from "./components/button";
import ButtonForm2 from './components/button copy';
import Midle from './components/MidBox';
import './index.css'
import './index2.css'


export default function App() {
  const [time, setTime] = useState(new Date());
  const [activeButton, setActiveButton] = useState(null);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const themeStyles = {
    light: {
      backgroundColor: 'white',
      color: 'black',
    },
    dark: {
      backgroundColor: 'black',
      color: 'white',
    },
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  useEffect(() => {
    const body = document.querySelector('body');
    body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  function tick() {
    setTime(new Date());
  }

  return (
    <div>
      <header>
        <h1 id="text1">Время: {time.toLocaleTimeString()}</h1>
        <span><ButtonForm onClick={() => handleButtonClick("settings")} active={activeButton === "settings"}>Настройки</ButtonForm></span>
        <span><ButtonForm onClick={() => handleButtonClick("cart")} active={activeButton === "cart"}>Главная</ButtonForm></span>
        <span><ButtonForm2 onClick={handleThemeToggle}>Изменить цвет заднего фона</ButtonForm2></span>
      </header>
    </div>
  );
}