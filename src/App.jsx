import logo from "./assets/logo.png";

import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

import { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [startGame,setStartGame] = useState(false);

  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "Expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ];
  cards.forEach((c, j) => c.id = j);

  const [count, setCount] = useState(0);

  return (
    <>
      <InitialScreen startGame={startGame} setStartGame={setStartGame}>
        <img alt="logo" src={logo} />
        <h1>ZapRecall</h1>
        <button onClick={() => setStartGame(true)} data-test="start-btn">Iniciar Recall!</button>
      </InitialScreen>

      <MainScreen startGame={startGame}>
        <Header logo={logo} />

        <Cards cards={cards} count={count} setCount={setCount} />

        <Footer count={count} size={cards.length} />
      </MainScreen>
    </>
  );
}

const InitialScreen = styled.div`
  ${(props) => props.startGame? 'display: none !important;' : ''}

  img {
    display: block;
    width: 136px;
    margin: 150px auto 25px;
  }

  h1 {
    text-align: center;
  }

  button {
    display: block;
    margin: 30px auto;

    background-color: #FFFFFF;
    width: 246px;
    height: 54px;
    border-radius: 5px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));

    color: #D70900;
    text-align: center;
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`

const MainScreen = styled.div`
  ${(props) => props.startGame? '':'display: none !important;'}
`