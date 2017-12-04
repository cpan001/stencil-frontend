import React from "react";
import CollaboratorsButton from "./CollaboratorsButton";

export default class ProjectProfileContainer extends React.Component {
  render() {
    return (
      <div className="project-info">
        <div className="project-info-title">
          {" "}
          <p>{this.props.project.title}</p>
        </div>
        <div className="project-info-description">
          <p id="project-description">{this.props.project.description}</p>
        </div>
        <div className="project-info-actions">
          <div className="project-designs-num">
            <span className="bold-num">
              {this.props.project.designs.length}
            </span>
            <span>Designs</span>
          </div>

          <CollaboratorsButton
            collaborators={this.props.project.jointusers}
            creator={this.props.project.creator}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}
