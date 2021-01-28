import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Register from "./Register";
import "./App.css";

function App() {
  return (
    <div className="App mobile-container">
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
