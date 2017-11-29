import React from "react";

export default class SearchForm extends React.Component {
  render() {
    return (
      <div className="search-form">
        <input
          type="text"
          placeholder="Search"
          value={this.props.searchTerm}
          onChange={e => this.props.onSearchChange(e.target.value)}
          className="searchBox"
        />
      </div>
    );
  }
}
