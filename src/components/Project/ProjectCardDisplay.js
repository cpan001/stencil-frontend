import React from "react";
import CardDescription from "./Card/CardDescription";
import CardImages from "./Card/CardImages";

function ProjectCardDisplay(props) {
  return (
    <div className="project-card">
      <CardDescription
        id={props.id}
        title={props.title}
        designsNum={props.designs.length}
        collabsNum={props.jointusers.length}
      />
      <CardImages designs={props.designs} />
      <hr />
    </div>
  );
}

export default ProjectCardDisplay;
