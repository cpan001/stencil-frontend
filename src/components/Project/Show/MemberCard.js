import React from "react";
import ProfileImage from "../../FormComponents/ProfileImage";

function MemberCard(props) {
  return (
    <div className="member">
      <ProfileImage image={props.person.avatar} />
      <span data-id={props.person.id}>{props.person.name}</span>
    </div>
  );
}

export default MemberCard;
