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
          <React.Fragment>
            <BodyStyle>
              <About />
              <LearningSite />
              <MemoryGame />
            </BodyStyle>
          </React.Fragment>
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
  padding: 20px 0;
  width: 70%;
  position: relative;
  transform: translate(-50%);
  left: 50%;
  box-sizing: border-box;
  color: #313648;
`;

export default App;
