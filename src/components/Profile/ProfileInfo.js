import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../actions/users";
import RelationshipsButton from "./RelationshipsButton";
import DesignCardDisplay from "../Design/DesignCardDisplay";
import FollowershipButton from "./FollowershipButton";

export default class ProfileInfo extends React.Component {
  render() {
    console.log(this.props.user, "hit rofile info");
    return (
      <div className="profile-info">
        Name: {this.props.user.name}
        <FollowershipButton
          userId={this.props.userId}
          followers={this.props.user.followers}
        />
        <img src={this.props.user.avatar} alt="" width="100px" height="100px" />
        <p />
        <RelationshipsButton
          people={this.props.user.followers ? this.props.user.followers : []}
          text="Followers"
        />
        <RelationshipsButton
          people={this.props.user.followeds ? this.props.user.followeds : []}
          text="Following"
        />
        Contact:{" "}
        <a href={`mailto:${this.props.user.email}`}>{this.props.user.email}</a>
        <hr />
      </div>
    );
  }
}
