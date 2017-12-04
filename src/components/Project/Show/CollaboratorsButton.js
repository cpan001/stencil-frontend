import React from "react";
import MembersCard from "./MembersCard";

export default class CollaboratorsButton extends React.Component {
  state = {
    isOpen: false
  };
  handleClick = () => {
    this.setState({ isOpen: true });
  };
  handleCloseClick = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const showMembers = this.state.isOpen ? (
      <MembersCard
        creator={this.props.creator}
        collaborators={this.props.collaborators}
        {...this.props}
        onCloseClick={this.handleCloseClick}
      />
    ) : null;
    return (
      <div className="project-designs-num members" onClick={this.handleClick}>
        <span className="bold-num members">
          {this.props.collaborators.length + 1}
        </span>
        <span>Members</span>
        {showMembers}
      </div>
    );
  }
}
