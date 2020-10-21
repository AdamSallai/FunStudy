import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MemoryGame from "./components/MemoryGame";
import LearningSite from "./components/LearningSite";
import styled, { createGlobalStyle } from "styled-components";
import Data from "./components/Data";
import LearningData from "./components/LearningData";

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
              <MemoryGame />
            </Grey>
          </BodyStyle>
        )}
      />

      <Route path="/memorygame" exact component={Data} />
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
    height: 500px;
    width: 100%;
    > div {
      width: 70%;
      left: 50%;
      position: relative;
      transform: translate(-50%);
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
