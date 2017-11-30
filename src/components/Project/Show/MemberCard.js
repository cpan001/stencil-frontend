import React from "react";
import ProfileImage from "../../FormComponents/ProfileImage";

function MemberCard(props) {
  return (
    <div className="member">
      <ProfileImage image={props.person.avatar} />
      <span data-id={props.person.id}>{props.person.name}</span>
      {props.owner ? null : (
        <input
          data-id={props.person.id}
          type="button"
          value="remove"
          onClick={() => props.onRemoveMember(props.person.id)}
        />
      )}
    </div>
  );
}

export default MemberCard;
