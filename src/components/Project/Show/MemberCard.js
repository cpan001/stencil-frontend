import React from "react";
import ProfileImage from "../../FormComponents/ProfileImage";
import { Link } from "react-router-dom";

function MemberCard(props) {
  const showButton = props.canRemoveMembers ? (
    <input
      className="remove-member"
      data-id={props.person.id}
      type="button"
      value="remove"
      onClick={() => props.onRemoveMember(props.person.id)}
    />
  ) : null;
  return (
    <div className="member">
      <div className="member-profile">
        <Link to={`/users/${props.person.id}`}>
          <ProfileImage image={props.person.avatar} />{" "}
        </Link>
        <span data-id={props.person.id}>{props.person.name}</span>
      </div>
      <div className="member-button">{props.owner ? null : showButton}</div>
    </div>
  );
}

export default MemberCard;
