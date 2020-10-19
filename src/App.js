import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import MemoryGame from './components/MemoryGame';
import LearningSite from './components/LearningSite';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={About}
        />
        <Route
          exact
          path="/learning_site"
          component={LearningSite}
        />
        <Route
          exact
          path="/memory"
          component={MemoryGame}
        />
      </Switch>
    </Router>
  );
}

export default App;
