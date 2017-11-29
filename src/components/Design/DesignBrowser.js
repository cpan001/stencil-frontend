import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchDesigns } from "../../actions/designs";
import DesignList from "./DesignList";
import SearchForm from "../FormComponents/SearchForm";

class DesignBrowser extends React.Component {
  state = {
    searchTerm: ""
  };
  componentDidMount() {
    this.props.fetchDesigns();
  }

  handleSearchChange = searchTerm => {
    this.setState({ searchTerm: searchTerm });
  };
  render() {
    const regex = new RegExp(this.state.searchTerm, "i");

    const showDesigns = this.props.designs.filter(
      design =>
        design.title.match(regex) ||
        design.tags.some(tag => tag.text.match(regex))
    );
    console.log("hit design browser", showDesigns);
    return (
      <div className="design-browser">
        <SearchForm
          searchTerm={this.state.searchTerm}
          onSearchChange={this.handleSearchChange}
        />
        <div className="main-container">
          <div className="empty-container" />

          <div className="content-container">
            <DesignList designs={showDesigns} />
          </div>
          <div className="empty-container" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { designs: Object.values(state.designs.designs) };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDesigns }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignBrowser);
