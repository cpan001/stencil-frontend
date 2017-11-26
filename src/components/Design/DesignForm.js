import React from "react";
import { Link } from "react-router-dom";
import InputBox from "../FormComponents/InputBox";
import TagsInput from "./Form/TagsInput";

export default class DesignForm extends React.Component {
  state = {
    open: false,
    title: "",
    description: "",
    url: "",
    code: "",
    tags: [],
    original: false,
    projects: ""
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleCloseClick = () => {
    this.setState({ open: false });
  };
  render() {
    const formOpen = this.state.open ? "open" : null;
    return (
      <div>
        <input type="button" value="add design" onClick={this.handleClick} />
        <div className={`card-modal form ${formOpen}`}>
          <div className="modal-content">
            <span onClick={this.handleCloseClick}>&times;</span>
            <form>
              <h1>Add Design</h1>
              {/* Multiple Drop Photos Area */}
              <InputBox
                id="title"
                name="title"
                placeholder="Enter title"
                type="text"
                onChange={this.handleChange}
                value={this.state.title}
              />
              <InputBox
                id="description"
                name="description"
                placeholder="Enter description"
                type="text"
                onChange={this.handleChange}
                value={this.state.description}
              />
              <InputBox
                id="url"
                name="url"
                placeholder="Enter url"
                type="text"
                onChange={this.handleChange}
                value={this.state.url}
              />
              <InputBox
                id="code"
                name="code"
                placeholder="Enter code"
                type="text"
                onChange={this.handleChange}
                value={this.state.code}
              />
              <br />
              Tags: <TagsInput />
              <br />
              <input type="submit" value="Create Design" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
