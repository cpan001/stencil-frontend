import React from "react";
import CollaboratorsButton from "./CollaboratorsButton";

export default class ProjectProfileContainer extends React.Component {
  render() {
    return (
      <div className="project-profile">
        <h2>{this.props.project.title}</h2>
        <p>{this.props.project.description}</p>
        <p>{this.props.project.designs.length} Designs</p>
        <CollaboratorsButton
          collaborators={this.props.project.jointusers}
          creator={this.props.project.creator}
          {...this.props}
        />
      </div>
    );
  }
}
