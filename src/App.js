import React from "react";
import {FiSearch} from 'react-icons/fi';
import './styles.css'; 


function App() {
  return (
    <div className="container">
      <h2 className="title">Buscador CEP</h2>

      <div className="containerInput">
        <input 
          type="text" 
          placeholder="Digite seu cep"
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 40391172</h2>

        <span>Rua desembarg j m v de castro</span>
        <span>Complemento: casa</span>
        <span>Bairro: Sao caetano</span>
        <span>Salvador - BA</span>
      </main>
    </div>
  );
}

export default App;
