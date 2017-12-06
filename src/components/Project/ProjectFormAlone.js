import React from "react";
import { Link } from "react-router-dom";
import InputBox from "../FormComponents/InputBox";
import RSelect from "./RSelect";
import { createAloneProject } from "../../services/index";

export default class ProjectFormAlone extends React.Component {
  state = {
    project: {
      title: "",
      description: "",
      creator: this.props.userId,
      collaborators: []
    }
  };

  handleCloseClick = () => {
    this.setState({
      project: {
        title: "",
        description: "",
        creator: "",
        collaborators: []
      }
    });
    this.props.history.goBack();
  };

  handleSelectChange = collaborators => {
    this.setState({
      project: Object.assign({}, this.state.project, {
        collaborators: collaborators
      })
    });
  };
  handleChange = (id, value) => {
    switch (id) {
      case "title":
        this.setState({
          project: Object.assign({}, this.state.project, {
            title: value
          })
        });
        break;
      case "description":
        this.setState({
          project: Object.assign({}, this.state.project, {
            description: value
          })
        });
        break;
      default:
        break;
    }
  };

  validateForm = project => {
    return project.title;
  };

  handleSubmit = e => {
    e.preventDefault();
    const userId = this.props.userId;
    let project = this.state.project;
    project["collaborators"] = project["collaborators"].map(c => c.value);
    if (this.validateForm(this.state.project)) {
      createAloneProject(userId, project).then(json => {
        // console.log(json, "in project subit");
        if (!json.errors) {
          this.props.history.push(`/projects/${json.id}`);
        }
      });
    }
  };

  render() {
    return (
      <div>
        <div className="card-modal form open">
          <Link to="/designs" onClick={this.handleCloseClick}>
            &times;
          </Link>
          <div className="modal-content form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-title">
                <h1>Add Project</h1>
              </div>
              <div className="form-content">
                <div className="input-text project-alone">
                  <InputBox
                    id="title"
                    name="title"
                    placeholder="Enter title"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.project.title}
                  />
                  <textarea
                    className="input-focus"
                    id="description"
                    name="description"
                    cols="30"
                    placeholder="Enter description"
                    rows="4"
                    onChange={e =>
                      this.handleChange("description", e.target.value)}
                    value={this.state.project.description}
                  />

                  <RSelect
                    onSelectChange={this.handleSelectChange}
                    value={this.state.project.collaborators}
                    text={"Add Collaborators"}
                  />
                </div>
              </div>
              <div className="form-submit-section">
                {" "}
                <input type="submit" value="Create" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
