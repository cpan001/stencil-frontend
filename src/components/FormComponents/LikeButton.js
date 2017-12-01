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
        <i className="material-icons design-card-icons">favorite</i>
        <span>Save</span>
      </span>
    ) : (
      <span className="like-not-clicked" onClick={this.handleClick}>
        <i className="material-icons design-card-icons">favorite_border</i>
        <span>Save</span>
      </span>
    );
    return (
      <div className="design-action like">
        <div className="like-button">{button}</div>
        <div className="like-number">
          <span>{this.props.likes} Likes</span>
        </div>
      </div>
    );
  }
}
