import React from "react";
import { Link } from "react-router-dom";

function CardDescription(props) {
  return (
    <div className="project-card-description">
      <Link to={`/projects/${props.id}`}>{props.title}</Link>
      <p>
        <span>{props.designsNum}</span> Designs
      </p>
      <p>
        <span>{props.collabsNum + 1}</span> Members
      </p>
    </div>
  );
}

export default CardDescription;
