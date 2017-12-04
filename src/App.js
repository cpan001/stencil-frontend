import React, { Component } from "react";
import "./App.css";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from "./components/Home/HomeContainer";
import SignUpForm from "./components/Authentication/SignUpForm";
import SignInForm from "./components/Authentication/SignInForm";
import DesignContainer from "./components/Design/DesignContainer";
import ProjectFormAlone from "./components/Project/ProjectFormAlone";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavBar from "./components/NavBar/NavBar";
import DesignForm from "./components/Design/DesignForm";
import ProjectContainer from "./components/Project/ProjectContainer";
import authorize from "./components/Authentication/authorize";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { logOutUser } from "./actions/users";

class App extends Component {
  render() {
    const AuthSignInForm = authorize(SignInForm);
    const AuthSignUpForm = authorize(SignUpForm);
    const AuthDesignContainer = authorize(DesignContainer);
    const AuthDesignForm = authorize(DesignForm);
    const AuthProjectFormAlone = authorize(ProjectFormAlone);
    const AuthProjectContainer = authorize(ProjectContainer);
    const AuthProfileContainer = authorize(ProfileContainer);
    const token = localStorage.getItem("jwt");
    const userId = token ? jwt_decode(token)["user_id"] : null;
    return (
      <div className="App">
        <NavBar userId={userId} />
        <Route exact path="/" component={Home} />
        <Route
          path="/signup"
          render={props => {
            return !!userId ? (
              <Redirect to="/designs" />
            ) : (
              <AuthSignUpForm {...props} />
            );
          }}
        />
        <Route
          path="/signin"
          render={props => {
            return !!userId ? (
              <Redirect to="/designs" />
            ) : (
              <AuthSignInForm {...props} />
            );
          }}
        />
        <Route
          path="/logout"
          render={props => {
            this.props.logOutUser();
            return <Redirect to="/" />;
          }}
        />
        <Switch>
          <Route
            exact
            path="/designs/new"
            render={props => <AuthDesignForm {...props} userId={userId} />}
          />
          <Route
            path="/designs"
            render={props => <AuthDesignContainer {...props} userId={userId} />}
          />
          <Route
            path="/projects/new"
            render={props => (
              <AuthProjectFormAlone {...props} userId={userId} />
            )}
          />
          <Route
            path="/projects/:projectId"
            render={props => (
              <AuthProjectContainer {...props} userId={userId} />
            )}
          />
          <Route
            path="/users/:user_id"
            render={props => (
              <AuthProfileContainer {...props} viewerId={userId} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { viewer: state.users.viewer };
}

export default withRouter(connect(mapStateToProps, { logOutUser })(App));
