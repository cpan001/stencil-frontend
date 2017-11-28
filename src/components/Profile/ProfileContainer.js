import React from "react";
import ProfileInfo from "./ProfileInfo";

export default class ProfileContainer extends React.Component {
  render() {
    return (
      <div>
        <ProfileInfo userId={this.props.userId} />
      </div>
    );
  }
}
