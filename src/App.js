import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MemoryGame from "./components/MemoryGame";
import LearningSite from "./components/LearningSite";
import styled, { createGlobalStyle } from "styled-components";


function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <BodyStyle >
        <About />
        <LearningSite />
        <MemoryGame />
      </BodyStyle>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
    padding: 0;
    margin: 0;
  }
`;

const BodyStyle = styled.div `
  padding: 20px 0;
  width: 70%;
  position: relative;
  transform: translate(-50%);
  left: 50%;
  box-sizing: border-box;
  color: #313648;
`;

export default App;
