import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/Logo.png";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="link">
          <NavLink exact to="/designs">
            <img className="logo" src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="link">
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
        <div className="link">
          <NavLink to="/signin">Log In</NavLink>
        </div>

        <div className="link">
          <NavLink to="/projects/new">Add Project</NavLink>
        </div>
        <div className="link">
          <NavLink to="/logout">Log Out</NavLink>
        </div>
        <div className="link right">
          <NavLink to="/designs/new">
            <i className="material-icons navbar-icons">file_upload</i>
          </NavLink>
        </div>
        <div className="link right">
          <NavLink to="/designs">
            <i className="material-icons navbar-icons">explore</i>
          </NavLink>
        </div>
        <div className="link right">
          <NavLink to={`/users/${this.props.userId}`}>
            <i className="material-icons navbar-icons">person</i>
          </NavLink>
        </div>
      </div>
    );
  }
}
