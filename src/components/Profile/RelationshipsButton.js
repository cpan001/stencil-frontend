import React from "react";
import PersonListCard from "./PersonListCard";

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
          <div className="modal-content">
            <span onClick={this.handleCloseClick}>&times;</span>
            {this.props.people.map(person => (
              <PersonListCard key={person.id} {...person} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
