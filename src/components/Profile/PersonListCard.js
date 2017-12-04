import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../FormComponents/ProfileImage";

export default class PersonListCard extends React.Component {
  render() {
    return (
      <div className="person-card">
        <Link to={`/users/${this.props.id}`}>
          <ProfileImage image={this.props.avatar} />
          {this.props.name}
        </Link>
      </div>
    );
  }
}
