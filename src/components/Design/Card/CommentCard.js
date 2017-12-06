import React from "react";
import { voteComment } from "../../../actions/comments";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { upvoteCommentAPI } from "../../../services";
import jwt_decode from "jwt-decode";

class CommentCard extends React.Component {
  handleUpVote = () => {
    this.props.voteComment(this.props.id);
    upvoteCommentAPI(this.props.id, { comment: "upvote" });
  };
  render() {
    const token = localStorage.getItem("jwt");
    const viewerId = token ? jwt_decode(token)["user_id"] : null;
    const clickable = this.props.user.id !== viewerId;
    return (
      <div className="comment-card">
        <span>{this.props.user.name}</span>
        <span>
          {this.props.content}
          <div className="comment-vote">
            <i
              className="material-icons comment-icons"
              onClick={clickable ? this.handleUpVote : null}
            >
              thumb_up
            </i>
            <span>{this.props.votes}</span>
          </div>{" "}
        </span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ voteComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentCard);
