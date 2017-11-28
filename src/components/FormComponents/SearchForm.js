import React from "react";

export default class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={this.props.searchTerm}
          onChange={e => this.props.onSearchChange(e.target.value)}
        />
      </div>
    );
  }
}
