import React from "react";
import InputBox from "../FormComponents/InputBox";
import { connect } from "react-redux";
import { fetchUserProjects } from "../../services/index";
import jwt_decode from "jwt-decode";

class ProjectForm extends React.Component {
  state = {
    createProject: false,
    currentUserProjects: null
  };

  componentDidMount() {
    const userId = jwt_decode(localStorage.getItem("jwt"))["user_id"];
    fetchUserProjects(userId).then(projects => {
      console.log(projects, "PROJECTS");
      this.setState({ currentUserProjects: projects });
    });
  }

  handleCreateProjectClick = () => {
    this.setState({ createProject: true });
  };

  render() {
    const createProjectForm = !this.state.createProject ? (
      <div className="project-form">
        <span>
          <span>Choose Project</span>
          <select
            id="project"
            name="project"
            value={this.props.project}
            onChange={e => {
              this.props.onProjectChange(e.target.id, e.target.value);
            }}
          >
            <option value="" />
            {this.state.currentUserProjects
              ? this.state.currentUserProjects.map(p => (
                  <option value={p.title} key={p.id}>
                    {p.title}
                  </option>
                ))
              : null}
          </select>
        </span>
        <br />
        <div
          className="create-project-button"
          onClick={this.handleCreateProjectClick}
        >
          <i class="material-icons">add_circle</i>
          <span>Create Project</span>
        </div>
      </div>
    ) : (
      <div className="project-form">
        <div className="input-text project">
          <InputBox
            id="project"
            name="project"
            placeholder="New Project Name"
            type="text"
            onChange={this.props.onProjectChange}
            value={this.props.project}
          />
        </div>
      </div>
    );
    return createProjectForm;
  }
}

function mapStateToProps(state) {
  console.log(state, "HITTING HERE");
  return { projects: state.users.user };
}

export default connect(mapStateToProps)(ProjectForm);
