import React from "react";
import { Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

const authorize = RenderedComponent => {
  return class extends React.Component {
    render() {
      const token = localStorage.getItem("jwt");
      if (token) {
        const userId = jwt_decode(token)["user_id"];
        console.log(userId, "in testing jwt decode");
        if (
          (userId && this.props.location.pathname === "/signin") ||
          (userId && this.props.location.pathname === "/signup")
        ) {
          return <Redirect to="/designs" />;
        }
      }
      if (!token && this.props.location.pathname === "/signup") {
        console.log("in signup");
        return <RenderedComponent {...this.props} />;
      } else if (!token && this.props.location.pathname !== "/signin") {
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
