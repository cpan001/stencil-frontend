import React from "react";
import { Link } from "react-router-dom";
import MemberCard from "./MemberCard";

export default class MembersCard extends React.Component {
  render() {
    return (
      <div className="card-modal">
        <Link to="/designs">&times;</Link>
        <div className="modal-content">
          <h1>Members</h1>
          <p>Creator</p>
          <MemberCard person={this.props.creator} />
          <hr />
          Other Members
          <hr />
          {this.props.collaborators.map(c => (
            <MemberCard key={c.id} person={c} />
          ))}
        </div>
      </div>
    );
  }
}
