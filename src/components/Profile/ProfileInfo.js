import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../actions/users";
import RelationshipsButton from "./RelationshipsButton";
import DesignCardDisplay from "../Design/DesignCardDisplay";

class ProfileInfo extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    console.log(this.props);
    return (
      <div className="profile-info">
        Name: {this.props.user.name} <input type="button" value="follow" />
        <img src={this.props.user.avatar} alt="" width="100px" height="100px" />
        <p />
        <RelationshipsButton
          people={this.props.user.followers ? this.props.user.followers : []}
          text="Followers"
        />
        <RelationshipsButton
          people={this.props.user.followeds ? this.props.user.followeds : []}
          text="Following"
        />
        <p>
          {this.props.user.designs ? this.props.user.designs.length : null}{" "}
          Designs |{" "}
          {this.props.user.projects
            ? this.props.user.projects.length
            : null}{" "}
          Projects
        </p>
        Contact: {this.props.user.email}
        <hr />
        {this.props.user.designs
          ? this.props.user.designs.map(design => (
              <DesignCardDisplay {...design} key={design.id} />
            ))
          : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (state.users.user) {
    return { user: state.users.user };
  } else {
    return { user: {} };
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
