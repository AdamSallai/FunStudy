import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/mainPage/Navbar";
import About from "./components/mainPage/About";
import StartMemoryGame from "./components/memoryGame/StartMemoryGame";
import MemoryGame from "./components/memoryGame/MemoryGame";
import LearningSite from "./components/learningSite/LearningSite";
import styled, { createGlobalStyle } from "styled-components";
import LearningData from "./components/learningSite/LearningData";
import { SelectedCardProvider } from "./components/memoryGame/SelectedCardContext";
import Registration from './components/register/Registration';
import RegistrationPostRequest from './components/register/RegistrationPostRequest';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
        <Route
          exact
          path="/"
          render={(props) => (
            <BodyStyle>
              <Grey>
                <About />
              </Grey>
              <White>
                <LearningSite />
              </White>
              <Grey>
                <StartMemoryGame />
              </Grey>
              <White>
                <Registration />
              </White>
            </BodyStyle>
          )}
        />
        <SelectedCardProvider>
          <Route path="/memorygame" exact component={MemoryGame} />
        </SelectedCardProvider>
        <Route path="/learning" exact component={LearningData} />
    </Router>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
    padding: 0;
    margin: 0;
  }
`;


const BodyStyle = styled.div`
  width: 100%;
  top: 82px;
  position: relative;
  box-sizing: border-box;
  color: #313648;
  > div {
    padding: 30px;
    position: relative;
    min-height: 500px;
    width: 100%;
    > div {
      width: 70%;
      left: 50%;
      position: relative;
      transform: translate(-50%);
      @media (max-width: 768px) {
        width: 90%;
      }
    }
  }
`;

const Grey = styled.div`
  background-color: #313648;
  color: white;
`;
const White = styled.div`
  background-color: white;
  color: #313648;
`;

export default App;
