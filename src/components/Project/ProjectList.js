import React from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../../actions/projects";
import ProjectCardDisplay from "./ProjectCardDisplay";

class ProjectList extends React.Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.fetchProjects(params.user_id);
  }
  render() {
    const { params } = this.props.match;
    const sortedProjects = this.props.projects
      ? this.props.projects.sort((a, b) => {
          if (a.updated_at === b.updated_at) {
            return 0;
          } else if (a.updated_at > b.updated_at) {
            return -1;
          } else if (a.updated_at < b.updated_at) {
            return 1;
          }
        })
      : null;
    const projectCards = sortedProjects
      ? sortedProjects.map(proj => (
          <ProjectCardDisplay
            {...proj}
            key={proj.id}
            {...this.props}
            userId={params.user_id}
          />
        ))
      : null;
    return <div className="project-list">{projectCards}</div>;
  }
}

function mapStateToProps(state) {
  if (state.projects.projects) {
    return { projects: Object.values(state.projects.projects) };
  } else {
    return { projects: null };
  }
}
export default connect(mapStateToProps, { fetchProjects })(ProjectList);
