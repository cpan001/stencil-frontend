import React from "react";
import ProjectForm from "./ProjectForm";

export default class ProjectFormPlusSubmit extends React.Component {
  state = {
    project: ""
  };

  handleChange = (id, value) => {
    this.setState({ project: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onProjectSubmit(this.state.project);
    this.setState({ project: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ProjectForm
            onProjectChange={this.handleChange}
            project={this.state.project}
          />

          <div className="form-submit-section">
            <input type="submit" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}
