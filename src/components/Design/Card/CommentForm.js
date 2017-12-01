import React from "react";
import InputBox from "../../FormComponents/InputBox";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addComment } from "../../../actions/comments";
import { createComment } from "../../../services/index";
import jwt_decode from "jwt-decode";

class CommentForm extends React.Component {
  state = {
    comment: ""
  };

  handleChange = (id, value) => {
    this.setState({ comment: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const userName = jwt_decode(localStorage.getItem("jwt"))["user_name"];
    this.props.addComment({
      content: this.state.comment,
      user_id: this.props.userId,
      user: { name: userName },
      design_id: this.props.designId,
      votes: 0
    });
    createComment(this.props.userId, this.props.designId, {
      content: this.state.comment
    }).then(json => console.log(json));
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <InputBox
          id="comment"
          name="comment"
          placeholder="Add comment"
          type="text"
          onChange={this.handleChange}
          value={this.state.comment}
        />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addComment }, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentForm);
