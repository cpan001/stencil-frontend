import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home/HomeContainer";
import SignUpForm from "./components/Authentication/SignUpForm";
import SignInForm from "./components/Authentication/SignInForm";
import NavBar from "./components/NavBar";
import DesignContainer from "./components/Design/DesignContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/signin" component={SignInForm} />
        <Route path="/designs" component={DesignContainer} />
      </div>
    );
  }
}

export default App;
