import React from "react";
import ProfileImage from "../../FormComponents/ProfileImage";
import { Link } from "react-router-dom";

function CollaboratorsList(props) {
  return (
    <div className="collaborators-list">
      {props.collaborators.map(c => (
        <Link to={`/users/${c.id}`} key={c.id}>
          <ProfileImage key={c.id} image={c.avatar} />
        </Link>
      ))}
    </div>
  );
}

export default CollaboratorsList;
