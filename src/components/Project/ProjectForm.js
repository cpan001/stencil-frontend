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
      <div>
        <h1>Save to Project</h1>
        Choose from existing project{" "}
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
        <br />
        <input
          type="button"
          value="Create Project"
          onClick={this.handleCreateProjectClick}
        />
      </div>
    ) : (
      <div>
        <h1>Create Project</h1>
        <InputBox
          id="project"
          name="project"
          placeholder="Project Name"
          type="text"
          onChange={this.props.onProjectChange}
          value={this.props.project}
        />
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
