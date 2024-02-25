import React, { useState } from 'react';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';


function App() {

  const [textoDisplay, setTextoDisplay] = useState('');


// botao numero
  function numero(item) {
    setTextoDisplay(textoDisplay + item);
  }


  function BotaoNumero({ item }) {
    return (
      <button className='Botao' onClick={() => numero(item)}>{item}</button>
    );
  }



// botao limpa
  function BotaoLimpa({ item }) {
    return (
      <button className='Botao2' onClick={() => limpa(item)}>{item}</button>
    );
  }

  function limpa(item) {
    setTextoDisplay("");
  }

// botao op

  function BotaoOp({ item }) {
    if (textoDisplay == ""){
      return (
        <button className='Botao3' onClick={() => numero("")}>{item}</button>
      );
    }
    else{
      return (
        <button className='Botao3' onClick={() => numero(item)}>{item}</button>
      );
    }
    
  }

// botao igual -- terminar aqui

  function BotaoIg({ item }) {
    if(textoDisplay == ""){
      return (
        <button className='Botao2' onClick={() => numero("")}>{item}</button>
      );
    }else{
      return (
        <button className='Botao2' onClick={() => Resolucao()}>{item}</button>
      );
    }
    
  }



  function Resolucao() {
    try {
      // Use eval() para resolver a expressão no textoDisplay
      const resultado = eval(textoDisplay);
      
      // Verifique se o resultado é um número finito
      if (Number.isFinite(resultado)) {
        // Atualize o textoDisplay com o resultado
        setTextoDisplay(resultado.toString());
      } else {
        // Se o resultado não for um número finito, exiba uma mensagem de erro
        setTextoDisplay("Erro");
      }
    } catch (error) {
      // Se ocorrer algum erro durante a avaliação da expressão, exiba uma mensagem de erro
      setTextoDisplay("Erro");
    }
  }
  


  return (
    <div className="App">

        <div className='Corpo'>

          <div className='Retorno'> 
            <h1>{textoDisplay}</h1>
          </div>

          <div className='Inputar'>
            
            <div className='Botoes'>

              <BotaoNumero item="1"></BotaoNumero>
              <BotaoNumero item="2"></BotaoNumero>
              <BotaoNumero item="3"></BotaoNumero>
              <BotaoNumero item="4"></BotaoNumero>
              <BotaoNumero item="5"></BotaoNumero>
              <BotaoNumero item="6"></BotaoNumero>
              <BotaoNumero item="7"></BotaoNumero>
              <BotaoNumero item="8"></BotaoNumero>
              <BotaoNumero item="9"></BotaoNumero>
              <BotaoNumero item="0"></BotaoNumero>

            </div>

            <div className='Operacoes'>
              <BotaoOp item={'+'}></BotaoOp>
              <BotaoOp item={'-'}></BotaoOp>
              <BotaoOp item={'*'}></BotaoOp>
              <BotaoOp item={'/'}></BotaoOp>
              <BotaoLimpa item={"C"}></BotaoLimpa>
              <BotaoIg item={"="}></BotaoIg>
              
            </div>

          </div>
          

        </div>

      <div className="calc-wrapper"></div>
    </div>
  );
}

export default App;
