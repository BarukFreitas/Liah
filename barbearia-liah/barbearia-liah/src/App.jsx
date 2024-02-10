import React, { useState } from 'react';
import './App.css';

const Servico = ({ nome, opcoes }) => {
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

  const handleClique = () => {
    setMostrarOpcoes(!mostrarOpcoes);
  };

  return (
    <div className={`card ${mostrarOpcoes ? 'expandido' : ''}`} onClick={handleClique}>
      <img src={`src/assets/icone-${nome}.svg`} alt={nome} />
      <p className="texto-container">{nome}</p>
      {mostrarOpcoes && (
        <div className="opcoes">
          <p>Opções para {nome}:</p>
          <ul>
            {opcoes.map((opcao, index) => (
              <li key={index}>{opcao}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

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
        <img src="src/assets/icone-lupa.svg" className="lupa" alt="Lupa" />
        <p className="busca">Buscar Serviço...</p>
      </div>
      <div className="banner">
        <p>Banner</p>
      </div>

      <span className="texto-1">
        <p>Qual serviço gostaria de agendar?</p>
      </span>

      <div className="container">
        <Servico nome="cabelo" opcoes={['Corte Tradicional', 'Corte Na Tesoura', 'Degradê Navalhado',
      'Corte Degradê', 'Undercut Feminino']} />
        <Servico nome="barba" opcoes={['Barba simples', 'Barba completa']} />
        <Servico nome="cabelo-e-barba" opcoes={['Degradê Navalhado + Barba', 'Degradê + Barba',
        'Corte Tradicional + Barba', 'Corte na Tesura + Barba', 'Cabelo + Botox + Barba',
        'Barba + Pezinho', 'Corte + Hidratação', 'Corte + Sobrancelha', 'Depilação Orelha + Nariz']} />
        <Servico nome="outros" opcoes={['Depilação Nariz', 'Depilação Orelha', 'Hidratação',
        'Limpeza de Pele (Máscara Black)', 'Botox']} />
      </div>
    </>
  );
}

export default App;
