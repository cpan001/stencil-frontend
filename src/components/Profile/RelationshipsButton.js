import React from "react";
import PersonListCard from "./PersonListCard";
import { Link } from "react-router-dom";

export default class RelationshipsButton extends React.Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: true });
  };

  handleCloseClick = () => {
    this.setState({ open: false });
  };
  render() {
    const props = this.props.people;
    const formOpen = this.state.open ? "open" : null;
    return (
      <div className="relationships-button">
        <div onClick={this.handleClick}>
          <span className="actions-num">{this.props.people.length}</span>{" "}
          {this.props.text}
        </div>
        <div className={`card-modal form ${formOpen}`}>
          <a onClick={this.handleCloseClick}>&times;</a>
          <div className="modal-content profile">
            {this.props.people.map(person => (
              <PersonListCard key={person.id} {...person} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
