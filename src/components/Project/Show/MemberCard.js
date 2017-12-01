import React from "react";
import ProfileImage from "../../FormComponents/ProfileImage";
import jwt_decode from "jwt-decode";

function MemberCard(props) {
  const showButton = props.canRemoveMembers ? (
    <input
      data-id={props.person.id}
      type="button"
      value="remove"
      onClick={() => props.onRemoveMember(props.person.id)}
    />
  ) : null;
  return (
    <div className="member">
      <ProfileImage image={props.person.avatar} />
      <span data-id={props.person.id}>{props.person.name}</span>
      {props.owner ? null : showButton}
    </div>
  );
}

export default MemberCard;
