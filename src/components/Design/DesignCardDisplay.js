import React from "react";
import DesignCard from "./DesignCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { currentDesign } from "../../actions/designs";

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
          <p>
            {this.props.title} by {this.props.creator.name}
          </p>
        </div>
        <div className="empty-container" />
      </div>
    );
  }
}
