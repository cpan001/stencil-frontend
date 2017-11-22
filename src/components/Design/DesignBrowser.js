import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchDesigns } from "../../actions/designs";

class DesignBrowser extends React.Component {
  componentDidMount() {
    const designs = this.props.fetchDesigns();
  }
  render() {
    console.log("hit design browser", this.props.designs);
    return <div />;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { designs: state.designs.designs };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDesigns }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignBrowser);
