import React from "react";
import CommentCard from "./CommentCard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchComments } from "../../../actions/comments";

class CommentBrowser extends React.Component {
  componentDidMount() {
    this.props.fetchComments(this.props.designId);
    console.log("hit comment browser CDM");
  }
  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <CommentCard
            {...comment}
            key={comment.id}
            designId={this.props.designId}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: Object.values(state.comments.comments) };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComments }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentBrowser);
