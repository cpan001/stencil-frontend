import React from "react";
import { Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

const authorize = RenderedComponent => {
  return class extends React.Component {
    render() {
      console.log(this.props, "in authorize");
      if (
        (localStorage.getItem("jwt") &&
          this.props.location.pathname === "/signin") ||
        (localStorage.getItem("jwt") &&
          this.props.location.pathname === "/signup")
      ) {
        console.log("i am logged in");
        return <Redirect to="/designs" />;
      } else if (
        !localStorage.getItem("jwt") &&
        this.props.location.pathname === "/signup"
      ) {
        console.log("in signup");
        return <RenderedComponent {...this.props} />;
      } else if (
        !localStorage.getItem("jwt") &&
        this.props.location.pathname !== "/signin"
      ) {
        console.log("i am not logged in");
        return <Redirect to="/signin" />;
      } else {
        console.log("other case");
        return <RenderedComponent {...this.props} />;
      }
    }
  };
};

export default authorize;
