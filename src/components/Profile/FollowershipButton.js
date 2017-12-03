import React from "react";
import { createRelationship, deleteRelationship } from "../../services/index";
import { addFollower, deleteFollower } from "../../actions/users";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import jwt_decode from "jwt-decode";

class FollowershipButton extends React.Component {
  state = {
    following: false
  };

  handleClick = e => {
    const token = localStorage.getItem("jwt");
    const viewerId = token ? jwt_decode(token)["user_id"] : null;
    if (e.target.value === "follow") {
      this.props.addFollower({ id: viewerId });
      this.setState({ following: true });
      createRelationship(this.props.userId, {
        currentUserId: viewerId
      });
    } else {
      this.props.deleteFollower({ id: viewerId });
      this.setState({ following: false });
      deleteRelationship(this.props.userId, viewerId).then(json =>
        console.log(json)
      );
    }
  };
  render() {
    const token = localStorage.getItem("jwt");
    const viewerId = token ? jwt_decode(token)["user_id"] : null;
    const following = this.props.followers
      ? this.props.followers.some(f => f.id === parseInt(viewerId, 10))
      : null;
    const value = following || this.state.following ? "Following" : "Follow";
    return <input type="button" value={value} onClick={this.handleClick} />;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFollower, deleteFollower }, dispatch);
}
export default connect(null, mapDispatchToProps)(FollowershipButton);
