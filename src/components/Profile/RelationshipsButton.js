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
    const formOpen = this.state.open ? "open" : null;
    return (
      <div>
        <div onClick={this.handleClick}>
          {this.props.people.length} {this.props.text}
        </div>
        <div className={`card-modal form ${formOpen}`}>
          <div className="modal-content">
            <span onClick={this.handleCloseClick}>&times;</span>
            {this.props.people.map(person => <PersonListCard {...person} />)}
          </div>
        </div>
      </div>
    );
  }
}
