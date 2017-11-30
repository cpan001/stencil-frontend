import React from "react";
import CommentForm from "./CommentForm";
import CommentBrowser from "./CommentBrowser";

export default class CommentsContainer extends React.Component {
  state = {
    isOpen: false
  };

  handleCommentClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const form = this.state.isOpen ? (
      <CommentForm designId={this.props.designId} userId={this.props.userId} />
    ) : null;
    const browser = this.state.isOpen ? (
      <CommentBrowser designId={this.props.designId} />
    ) : null;
    return (
      <div className="design-action comments-container">
        <div onClick={this.handleCommentClick}>
          <i className="material-icons design-card-icons">comment</i>
          <span>{this.props.commentsLength} Comment(s)</span>
        </div>
        {form}
        {browser}
      </div>
    );
  }
}
