import React from "react";
import { Link } from "react-router-dom";
import InputBox from "../FormComponents/InputBox";
import RSelect from "./RSelect";

export default class ProjectFormAlone extends React.Component {
  state = {
    project: {
      title: "",
      description: "",
      creator: localStorage.getItem("user_id"),
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
  };

  handleSelectChange = collaborators => {
    this.setState({
      project: Object.assign({}, this.state.project, {
        collaborators
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

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.project);
  };

  render() {
    return (
      <div>
        <div className="card-modal form open">
          <div className="modal-content">
            <Link to="/designs" onClick={this.handleCloseClick}>
              &times;
            </Link>
            <form onSubmit={this.handleSubmit}>
              <h1>Add Project</h1>
              <InputBox
                id="title"
                name="title"
                placeholder="Enter title"
                type="text"
                onChange={this.handleChange}
                value={this.state.project.title}
              />
              <InputBox
                id="description"
                name="description"
                placeholder="Enter description"
                type="text"
                onChange={this.handleChange}
                value={this.state.project.description}
              />
              <RSelect onSelectChange={this.handleSelectChange} />
              <input type="submit" value="Create" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
