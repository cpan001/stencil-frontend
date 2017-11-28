import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchDesigns } from "../../actions/designs";
import DesignCardDisplay from "./DesignCardDisplay";
import DesignForm from "./DesignForm";
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
    console.log("hit design browser", this.props.designs);
    const regex = new RegExp(this.state.searchTerm, "i");

    const showDesigns = this.props.designs.filter(
      design =>
        design.title.match(regex) ||
        design.tags.some(tag => tag.text.match(regex))
    );
    return (
      <div>
        <SearchForm
          searchTerm={this.state.searchTerm}
          onSearchChange={this.handleSearchChange}
        />
        {showDesigns.map(design => (
          <DesignCardDisplay {...design} key={design.id} />
        ))}
        <DesignForm userId={this.props.userId} />
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
