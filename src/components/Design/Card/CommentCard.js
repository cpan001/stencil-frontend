import React from "react";
import { voteComment } from "../../../actions/comments";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { upvoteCommentAPI } from "../../../services";

class CommentCard extends React.Component {
  handleUpVote = () => {
    this.props.voteComment(this.props.id);
    upvoteCommentAPI(this.props.id, { comment: "upvote" });
  };
  render() {
    return (
      <div>
        {this.props.content} | {this.props.votes} Votes
        <input type="button" value="Upvote" onClick={this.handleUpVote} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ voteComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentCard);
