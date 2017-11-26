import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchDesigns } from "../../actions/designs";
import DesignCard from "./DesignCard";
import DesignCardDisplay from "./DesignCardDisplay";
import DesignForm from "./DesignForm";

class DesignBrowser extends React.Component {
  componentDidMount() {
    const designs = this.props.fetchDesigns();
  }
  render() {
    console.log("hit design browser", this.props.designs);
    return (
      <div>
        {this.props.designs.map(design => (
          <DesignCardDisplay {...design} key={design.id} />
        ))}
        <DesignForm />
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
