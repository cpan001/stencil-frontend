import React from "react";
import ProfileInfo from "./ProfileInfo";
import { Switch, Route } from "react-router-dom";
import ProfileNavBar from "./ProfileNavBar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../../actions/users";
import DesignList from "../Design/DesignList";
import ProjectList from "../Project/ProjectList";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.user_id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.user_id !== nextProps.match.params.user_id) {
      this.props.fetchUser(nextProps.match.params.user_id);
    }
  }

  render() {
    const { params } = this.props.match;
    return (
      <div>
        <ProfileNavBar userId={params.user_id} />
        <ProfileInfo
          userId={params.user_id}
          user={this.props.user}
          viewerId={this.props.viewerId}
        />
        <Switch>
          <Route
            path="/users/:user_id/designs"
            render={props => {
              return (
                <DesignList {...props} designs={this.props.user.designs} />
              );
            }}
          />

          <Route
            path="/users/:user_id/projects"
            render={props => <ProjectList {...props} />}
          />
          <Route
            path="/users/:user_id"
            render={props => {
              return (
                <DesignList {...props} designs={this.props.user.likeddesigns} />
              );
            }}
          />
        </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
