import React from "react";
import ProfileImage from "../../FormComponents/ProfileImage";
import { Link } from "react-router-dom";

function CollaboratorOne(props) {
  return (
    <div className="one-collaborator">
      <Link to={`/users/${props.creator.id}`}>
        <ProfileImage image={props.creator.avatar} />
      </Link>
    </div>
  );
}

export default CollaboratorOne;
