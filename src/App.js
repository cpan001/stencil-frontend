import React, { Component } from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Home from "./components/Home/HomeContainer";
import SignUpForm from "./components/Authentication/SignUpForm";
import SignInForm from "./components/Authentication/SignInForm";
import NavBar from "./components/NavBar";
import DesignContainer from "./components/Design/DesignContainer";
import { login } from "./services";

class App extends Component {
  state = {};

  loginUser = params => {
    login(params).then(user => {
      console.log("hit login user", user);
      if (!user.error) {
        localStorage.setItem("user_id", user.id);
        this.setState({ user: user });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUpForm} />
        <Route
          path="/signin"
          render={() => {
            return !!localStorage.getItem("user_id") ? (
              <Redirect to={`/designs`} />
            ) : (
              <SignInForm onLogin={this.loginUser} />
            );
          }}
        />
        <Route
          path="/designs"
          render={props => (
            <DesignContainer
              {...props}
              userId={localStorage.getItem("user_id")}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
