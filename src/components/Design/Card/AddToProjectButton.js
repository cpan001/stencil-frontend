import React from "react";

function AddToProjectButton(props) {
  return (
    <div className="design-action">
      <span className="project-add-clicked" onClick={props.onProjectAddClick}>
        <i className="material-icons design-card-icons">add_box</i>
      </span>
    </div>
  );
}

export default AddToProjectButton;
