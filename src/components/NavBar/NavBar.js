import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/Logo.png";
import jwt_decode from "jwt-decode";

export default class NavBar extends React.Component {
  render() {
    const token = localStorage.getItem("jwt");
    const userId = token ? jwt_decode(token)["user_id"] : null;
    const showNavBar = userId ? (
      <div className="navbar-actions">
        <div className="dropdown">
          <div className="dropbtn">
            <i className="material-icons navbar-icons">file_upload</i>
          </div>
          <div className="dropdown-content new">
            <NavLink to="/designs/new">New Design</NavLink>
            <NavLink to="/projects/new">New Project</NavLink>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <i className="material-icons navbar-icons">explore</i>
          </div>
          <div className="dropdown-content new">
            <NavLink to="/designs">Design Inspo</NavLink>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropbtn">
            <i className="material-icons navbar-icons">person</i>
          </div>
          <div className="dropdown-content new">
            <NavLink to={`/users/${this.props.userId}`}>My Profile</NavLink>
            <NavLink to="/logout">Log Out</NavLink>
          </div>
        </div>
      </div>
    ) : (
      <div className="navbar-actions">
        <div className="dropdown loggedout">
          <div className="dropbtn">
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </div>
        <div className="dropdown loggedout">
          <div className="dropbtn">
            <NavLink to="/signin">Log In</NavLink>
          </div>
        </div>
      </div>
    );
    return (
      <div className="navbar">
        <div id="logo">
          <NavLink exact to={userId ? "/designs" : "/"}>
            <img className="logo" src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="empty-container" />
        {showNavBar}
      </div>
    );
  }
}
