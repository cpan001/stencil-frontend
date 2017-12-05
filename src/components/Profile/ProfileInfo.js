import React from "react";
import RelationshipsButton from "./RelationshipsButton";
import FollowershipButton from "./FollowershipButton";
import ProfileImage from "../FormComponents/ProfileImage";
import jwt_decode from "jwt-decode";

export default class ProfileInfo extends React.Component {
  render() {
    // console.log(this.props.user, "in profile info");
    const viewerId = jwt_decode(localStorage.getItem("jwt"))["user_id"];
    return (
      <div className="profile-info">
        <div className="profile-image-container">
          <ProfileImage image={this.props.user.avatar} />
        </div>
        <div className="profile-description">
          <div className="profile-name">
            <p>{this.props.user.name}</p>
            {parseInt(this.props.userId, 10) === viewerId ? null : (
              <FollowershipButton
                userId={this.props.userId}
                followers={this.props.user.followers}
              />
            )}
          </div>
          <div className="profile-actions">
            <div className="designs-num">
              <span className="actions-num">
                {this.props.user.likeddesigns
                  ? this.props.user.likeddesigns.length
                  : null}{" "}
              </span>
              <span>designs</span>
            </div>
            <RelationshipsButton
              people={
                this.props.user.followers ? this.props.user.followers : []
              }
              text="followers"
            />{" "}
            <RelationshipsButton
              people={
                this.props.user.followeds ? this.props.user.followeds : []
              }
              text="following"
            />
            <div className="design-actions-empty-container" />
          </div>
          <div className="profile-email">
            <i className="material-icons">mail_outline</i>
            <a href={`mailto:${this.props.user.email}`}>
              {this.props.user.email}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
