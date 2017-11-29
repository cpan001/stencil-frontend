import React from "react";
import { Link } from "react-router-dom";

export default class DesignCardDisplay extends React.Component {
  render() {
    return (
      <div className="card-image-background">
        <Link to={`/designs/${this.props.id}`}>
          {" "}
          <img
            src={this.props.images[0].filename}
            alt=""
            className="card-modal-button design"
          />
          <div className="image-text">
            <div className="image-title">{this.props.title}</div>
            <div className="image-description">{this.props.description}</div>
          </div>
        </Link>
      </div>
    );
  }
}
