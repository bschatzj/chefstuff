import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import "./styles.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={CreateAccount} />
      <Route exact path="/login" component={Login} />

      <Home />
    </div>
  );
}

export default App;
