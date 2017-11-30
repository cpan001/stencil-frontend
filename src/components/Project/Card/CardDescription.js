import React from "react";
import { Link } from "react-router-dom";

function CardDescription(props) {
  return (
    <div>
      <Link to={`/projects/${props.id}`}>{props.title}</Link>
      <p>{props.designsNum} Designs</p>
      <p>{props.collabsNum + 1} Members</p>
    </div>
  );
}

export default CardDescription;
