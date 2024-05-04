import React, { useState } from 'react';

export default function ButtonForm({ children, active, onClick }) {
  const handleClick = () => {
    onClick(); // вызываем переданную функцию onClick
  };

  return (
    <div>
      <button className={active ? "button active" : "button"} onClick={handleClick} id="but1">
        {children}
      </button>
    </div>
  );
}
