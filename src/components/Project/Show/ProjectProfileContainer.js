import React from "react";
import CollaboratorsButton from "./CollaboratorsButton";
import CollaboratorsList from "./CollaboratorsList";
import CollaboratorOne from "./CollaboratorOne";

export default class ProjectProfileContainer extends React.Component {
  render() {
    const showMembers = this.props.project.jointusers.length ? (
      <CollaboratorsList collaborators={this.props.project.jointusers} />
    ) : (
      <CollaboratorOne creator={this.props.project.creator} />
    );

    const showButton = this.props.project.jointusers.length ? (
      <CollaboratorsButton
        collaborators={this.props.project.jointusers}
        creator={this.props.project.creator}
      />
    ) : (
      <p>By {this.props.project.creator.name}</p>
    );
    return (
      <div className="project-profile">
        <h2>{this.props.project.title}</h2>
        <p>{this.props.project.description}</p>
        <p>{this.props.project.designs.length} Designs</p>
        {showButton}
        {showMembers}
      </div>
    );
  }
}
