import React from "react";
import { createRelationship, deleteRelationship } from "../../services/index";
import { addFollower, deleteFollower } from "../../actions/users";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class FollowershipButton extends React.Component {
  state = {
    following: false
  };

  handleClick = e => {
    const currentUserId = localStorage.getItem("user_id");
    if (e.target.value === "follow") {
      this.props.addFollower({ id: currentUserId });
      this.setState({ following: true });
      createRelationship(this.props.userId, {
        currentUserId: currentUserId
      });
    } else {
      this.props.deleteFollower({ id: currentUserId });
      this.setState({ following: false });
      deleteRelationship(this.props.userId, currentUserId).then(json =>
        console.log(json)
      );
    }
  };
  render() {
    const currentUserId = localStorage.getItem("user_id");
    const following = this.props.followers
      ? this.props.followers.some(f => f.id === parseInt(currentUserId, 10))
      : null;
    const value = following || this.state.following ? "following" : "follow";
    return <input type="button" value={value} onClick={this.handleClick} />;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFollower, deleteFollower }, dispatch);
}
export default connect(null, mapDispatchToProps)(FollowershipButton);
