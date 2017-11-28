import React from "react";
import { NavLink } from "react-router-dom";

function ProfileNavBar(props) {
  return (
    <div>
      <NavLink to={`/users/${props.userId}/designs`}>Designs</NavLink>
      <NavLink to={`/users/${props.userId}/projects`}>Projects</NavLink>
    </div>
  );
}

export default ProfileNavBar;
