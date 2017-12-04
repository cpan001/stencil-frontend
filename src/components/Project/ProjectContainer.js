import React from "react";
import { connect } from "react-redux";
import { fetchProject } from "../../actions/projects";
import DesignList from "../Design/DesignList";
import ProjectProfileContainer from "./Show/ProjectProfileContainer";

class ProjectContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  render() {
    const showProject = this.props.project["creator"] ? (
      <div>
        <div className="main-container">
          <div className="empty-container" />
          <div className="content-container">
            <ProjectProfileContainer
              project={this.props.project}
              {...this.props}
            />
            <DesignList designs={this.props.project.designs} />
          </div>
          <div className="empty-container" />
        </div>
      </div>
    ) : null;
    return showProject;
  }
}

function mapStateToProps(state, ownProps) {
  const projectId = ownProps.match.params.projectId;
  if (state.projects.projects && state.projects.projects[projectId]) {
    const project = state.projects.projects[projectId];
    return { project, jointusers: project["jointusers"] };
  } else {
    return { project: {} };
  }
}

export default connect(mapStateToProps, { fetchProject })(ProjectContainer);
