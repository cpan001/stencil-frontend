import React from "react";
import { NavLink } from "react-router-dom";

const style = { margin: "5px" };
export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavLink exact to="/" style={style}>
          Home
        </NavLink>
        <NavLink to="/signup" style={style}>
          Sign Up
        </NavLink>
        <NavLink to="/signin" style={style}>
          Log In
        </NavLink>
        <NavLink to="/designs" style={style}>
          Designs
        </NavLink>
        <NavLink to="/projects" style={style}>
          Projects
        </NavLink>
        <NavLink to={`/users/${localStorage.getItem("user_id")}`}>
          My Profile
        </NavLink>
      </div>
    );
  }
}
