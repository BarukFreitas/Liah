import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <header className="menu">
      <img src="src/assets/logo.png" className="logo" alt="Logo" />
      <a href="#">
        <div className="menu-burguer">
          <div className="barra"></div>
          <div className="barra"></div>
          <div className="barra"></div>
        </div>
      </a>
    </header>
    <div className="search-bar">
      <img src="src/assets/icone-lupa.svg" className="lupa" alt="Ícone de Lupa" />
      <p className="busca">Buscar Serviço...</p>
    </div>
    <div className="banner">
      <p>Banner</p>
    </div>
    <span className="texto-1">
      <p>Qual serviço gostaria de agendar?</p>
    </span>
    <div className="container">
      <div className="card-1">
        <img src="src/assets/icone-cabelo.svg" alt="Ícone Cabelo" />
        <p className="texto-container">Cabelo</p>
      </div>
      <div className="card-2">
        <img src="src/assets/icone-barba.svg" alt="Ícone Barba" />
        <p className="texto-container">Barba</p>
      </div>
      <div className="card-3">
        <img src="src/assets/icone-cabelo-e-barba.svg" alt="Ícone Cabelo e Barba" />
        <p className="texto-container">Cabelo e barba</p>
      </div>
      <div className="card-4">
        <img src="src/assets/icone-outros.svg" alt="Ícone Outros" />
        <p className="texto-container">Outros</p>
      </div>
    </div>
  </>
);
}

export default App
