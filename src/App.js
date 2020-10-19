import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MemoryGame from "./components/MemoryGame";
import LearningSite from "./components/LearningSite";
import { createGlobalStyle } from "styled-components";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/learning_site" component={LearningSite} />
      <Route exact path="/memory" component={MemoryGame} />
    </Router>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
`;

export default App;
