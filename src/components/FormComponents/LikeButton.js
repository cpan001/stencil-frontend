import React from "react";

export default class LikeButton extends React.Component {
  state = {
    clicked: null
  };

  componentDidMount() {
    this.setState({ clicked: this.props.clicked });
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    this.props.onLikeButtonClick(this.state.clicked);
  };
  render() {
    const button = this.state.clicked ? (
      <span className="like-clicked" onClick={this.handleClick}>
        &#9829;
      </span>
    ) : (
      <span className="like-not-clicked" onClick={this.handleClick}>
        &#9825;
      </span>
    );
    return (
      <div className="like">
        Likes: {this.props.likes} {button}
      </div>
    );
  }
}
