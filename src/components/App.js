import React from 'react';
import './../App.css';
import Header from "./Header";
import QuizControl from "./QuizControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>Test</h1>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <QuizControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
