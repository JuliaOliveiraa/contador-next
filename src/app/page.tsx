"use client";
import React, { useState } from 'react';
import Button from '../components/Botao';
import '../styles/page.css';

const Home: React.FC = () => {
  const [contador, setContador] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <header>
        <h1>Contador</h1>
        <Button label={darkMode ? 'Modo Claro' : 'Modo Escuro'} onClick={toggleDarkMode} />
      </header>
      <main className="main-container">
        <p className="contador">{contador}</p>
        <div className="button-container">
          <Button label="Incrementar" onClick={incrementarContador} type="increment" />
          <Button label="Decrementar" onClick={decrementarContador} type="decrement" />
        </div>
      </main>
    </div>
  );
};

export default Home;
