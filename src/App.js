import React, { useState } from 'react';
import './App.css';


function App() {

  const [textoDisplay, setTextoDisplay] = useState('');


// botao numero
  function numero(item) { // funcao que pega o numero e coloca no display
    setTextoDisplay(textoDisplay + item);
  }


  function BotaoNumero({ item }) { // funcao de cada botao de numero
    return (
      <button className='Botao' onClick={() => numero(item)}>{item}</button>
    );
  }



// botao limpa
  function BotaoLimpa({ item }) { // botao que limpa a calculadora
    return (
      <button className='Botao2' onClick={() => limpa(item)}>{item}</button>
    );
  }

  function limpa(item) { // funcao que limpa
    setTextoDisplay("");
  }

// botao op

  function BotaoOp({ item }) { // Esses sao os botoes das operacoes
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


  function BotaoIg({ item }) { // esse é o botao de igual
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



  function Resolucao() { //essa é a funcao que reolve a conta
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
    <div className="App"> {/* esse é o app */}

        <div className='Corpo'> {/* esse é o corpo da calculadora */}

          <div className='Retorno'> {/* essa é a div do campo do display */}
            <h1>{textoDisplay}</h1>
          </div>

          <div className='Inputar'> {/* esse é o corpo da parte em que ficam os numetos e os botoes */}
            
            <div className='Botoes'> {/* parte dos numero */}

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

            <div className='Operacoes'> {/* parte dos botoes*/}
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
