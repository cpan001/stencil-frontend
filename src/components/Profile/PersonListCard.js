import React from "react";
import { Link } from "react-router-dom";

//fix link and allow people to follow or unfollow
export default class PersonListCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.avatar} alt="" width="100px" height="100px" />
        <Link to={`/users/${this.props.id}`}>{this.props.name}</Link>
      </div>
    );
  }
}
