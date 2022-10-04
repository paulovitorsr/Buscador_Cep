import React, { useEffect, useState } from "react";
import {FiSearch} from 'react-icons/fi';
import api from "./services/api";
import './styles.css';


function App() {
  const [input, SetInput] = useState('');
  const [cep, SetCep] = useState({});

 
    async function handleButton(){
      if (input === '') {
        alert('Favor preencher algum cep')
        return;
      }
  
      try {
        const response = await api.get(`${input}/json`)
        SetCep(response.data)
        SetInput("")
      } catch{
        alert("Ops error ao buscar o cep");
        SetInput('');
      }
  
    }


  return (
    <div className="container">
      <h2 className="title">Buscador CEP</h2>

      <div className="containerInput">
        <input 
          type="text" 
          placeholder="Digite seu cep"
          value={input}
          onChange={ (e) => SetInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleButton}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      {Object.keys(cep).length > 0 &&(

        <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>logradouro: {cep.logradouro}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>

      )}

    </div>
  );
}

export default App;
