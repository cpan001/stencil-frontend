import React from "react";
import { NavLink } from "react-router-dom";

function ProfileNavBar(props) {
  return (
    <div className="profile-navbar">
      <NavLink
        to={`/users/${props.userId}/designs`}
        activeStyle={{
          fontWeight: "bold",
          color: "#262626",
          height: "52px",
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid #262626"
        }}
      >
        Designs
      </NavLink>
      <NavLink
        to={`/users/${props.userId}/projects`}
        activeStyle={{
          fontWeight: "bold",
          color: "#262626",
          height: "52px",
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid #262626"
        }}
      >
        Projects
      </NavLink>
    </div>
  );
}

export default ProfileNavBar;
