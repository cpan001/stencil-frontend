import React from "react";
import { createRelationship, deleteRelationship } from "../../services/index";
import { addFollower, deleteFollower } from "../../actions/users";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import jwt_decode from "jwt-decode";

class FollowershipButton extends React.Component {
  state = {
    following: ""
  };

  handleClick = e => {
    const token = localStorage.getItem("jwt");
    const viewerId = token ? jwt_decode(token)["user_id"] : null;
    if (e.target.value === "Follow") {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.followers) {
      const token = localStorage.getItem("jwt");
      const viewerId = token ? jwt_decode(token)["user_id"] : null;
      const followers = nextProps.user.followers;
      const following = followers.some(f => f.id === parseInt(viewerId, 10));
      if (this.state.following === "") {
        return this.setState({ following });
      } else if (!following && this.state.following) {
        return this.setState({ following: false });
      } else {
        return this.setState({ following: true });
      }
    }
  }

  render() {
    return (
      <input
        type="button"
        value={this.state.following ? "Following" : "Follow"}
        onClick={this.handleClick}
      />
    );
  }
}

function mapStateToProps(state) {
  if (state.users.user) {
    return { user: state.users.user };
  } else {
    return { user: {} };
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFollower, deleteFollower }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FollowershipButton);
