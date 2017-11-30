import React from "react";
import { Link } from "react-router-dom";
import MemberCard from "./MemberCard";
import RSelect from "../RSelect";
import { addMember, removeMember } from "../../../actions/projects";
import { addMemberToProject, removeMemberToProject } from "../../../services";
import { connect } from "react-redux";

class MembersCard extends React.Component {
  state = {
    newCollaborators: []
  };

  handleSelectChange = collaborators => {
    this.setState({ newCollaborators: collaborators });
  };

  handleAddMember = () => {
    const projectId = this.props.match.params.projectId;
    this.state.newCollaborators.forEach(c =>
      this.props.addMember(
        { id: c["value"], name: c["label"], avatar: c["avatar"] },
        projectId
      )
    );
    const collaborators = this.state.newCollaborators.map(c => c.value);
    addMemberToProject(projectId, { collaborators });
    this.setState({ newCollaborators: [] });
  };

  handleRemoveMember = memberId => {
    const projectId = this.props.match.params.projectId;
    this.props.removeMember(memberId, projectId);
    const updatedMembers = this.state.newCollaborators.filter(
      c => c.id !== parseInt(memberId, 10)
    );
    this.setState({ newCollaborators: updatedMembers });
    removeMemberToProject(projectId, memberId);
  };

  render() {
    const projectId = this.props.match.params.projectId;
    return (
      <div className="card-modal members">
        <Link to={`/projects/${projectId}`} onClick={this.props.onCloseClick}>
          &times;
        </Link>
        <div className="modal-content">
          <h1>Members</h1>
          Add Member
          <div className="add-members">
            <RSelect onSelectChange={this.handleSelectChange} />
            <input
              type="button"
              value="Add New Member(s)"
              onClick={this.handleAddMember}
            />
          </div>
          <p>Creator</p>
          <MemberCard person={this.props.creator} owner={true} />
          <hr />
          Other Members
          <hr />
          {this.props.collaborators.map(c => (
            <MemberCard
              key={c.id}
              person={c}
              onRemoveMember={this.handleRemoveMember}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(null, { addMember, removeMember })(MembersCard);
