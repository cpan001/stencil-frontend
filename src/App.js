import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/Home/HomeContainer";
import SignUpForm from "./components/Authentication/SignUpForm";
import SignInForm from "./components/Authentication/SignInForm";
import DesignContainer from "./components/Design/DesignContainer";
import { login } from "./services";
import ProjectContainer from "./components/Project/ProjectContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavBar from "./components/NavBar/NavBar";
import DesignForm from "./components/Design/DesignForm";

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
        <Switch>
          <Route
            exact
            path="/designs/new"
            render={props => (
              <DesignForm {...props} userId={localStorage.getItem("user_id")} />
            )}
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
          <Route
            path="/projects"
            render={props => (
              <ProjectContainer
                {...props}
                userId={localStorage.getItem("user_id")}
              />
            )}
          />
          <Route
            path="/users/:user_id"
            render={props => <ProfileContainer {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
