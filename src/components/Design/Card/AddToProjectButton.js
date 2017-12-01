import React from "react";

function AddToProjectButton(props) {
  return (
    <div className="design-action">
      <div className="project-add-clicked" onClick={props.onProjectAddClick}>
        <i className="material-icons design-card-icons">add_box</i>
        <span>Add to Project</span>
      </div>
    </div>
  );
}

export default AddToProjectButton;
