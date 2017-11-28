import React from "react";
import { Link } from "react-router-dom";

export default class DesignCardDisplay extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="empty-container" />
        <div className="card-display design">
          <Link to={`/designs/${this.props.id}`}>
            {" "}
            <img
              src={this.props.images[0].filename}
              alt=""
              width="100px"
              height="100px"
              className="card-modal-button design"
            />
          </Link>
          <p>{this.props.title}</p>
        </div>
        <div className="empty-container" />
      </div>
    );
  }
}
