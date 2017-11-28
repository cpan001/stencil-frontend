import React from "react";
import InputBox from "../FormComponents/InputBox";
import CheckBox from "../FormComponents/CheckBox";
import ImagesUpload from "../FormComponents/ImagesUpload";
import TagsInput from "./Form/TagsInput";
import { addDesign } from "../../actions/designs";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addDesignAPI } from "../../services";

//add projects selection
class DesignForm extends React.Component {
  state = {
    open: false,
    design: {
      title: "",
      description: "",
      url: "",
      code: "",
      projects: "",
      images: [],
      tags: [],
      creator: {}
    }
  };

  handleTagChange = value => {
    console.log(value);
    const tags = value;
    const newTags = tags.map(tag => tag.value);
    this.setState({
      design: Object.assign({}, this.state.design, { tags: newTags })
    });
  };

  handleImagesUpload = url => {
    this.setState({
      design: Object.assign({}, this.state.design, {
        images: [...this.state.design.images, { filename: url }]
      })
    });
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleCloseClick = () => {
    this.setState({
      open: false,
      design: {
        title: "",
        description: "",
        url: "",
        code: "",
        tags: [],
        projects: "",
        images: []
      }
    });
  };

  handleChange = (id, value) => {
    console.log(id, value);
    switch (id) {
      case "title":
        this.setState({
          design: Object.assign({}, this.state.design, {
            title: value
          })
        });
        break;
      case "description":
        this.setState({
          design: Object.assign({}, this.state.design, {
            description: value
          })
        });
        break;
      case "url":
        this.setState({
          design: Object.assign({}, this.state.design, {
            url: value
          })
        });
        break;
      case "code":
        this.setState({
          design: Object.assign({}, this.state.design, {
            code: value
          })
        });
        break;
      default:
        break;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addDesign(this.state.design);
    const newApiDesign = { ...this.state.design };
    newApiDesign["images"] = newApiDesign["images"].map(
      image => image.filename
    );
    addDesignAPI(newApiDesign, this.props.userId);
    this.setState({
      open: false,
      design: {
        title: "",
        description: "",
        url: "",
        code: "",
        tags: [],
        projects: "",
        images: []
      }
    });
  };

  render() {
    const formOpen = this.state.open ? "open" : null;
    return (
      <div>
        <input type="button" value="add design" onClick={this.handleClick} />
        <div className={`card-modal form ${formOpen}`}>
          <div className="modal-content">
            <span onClick={this.handleCloseClick}>&times;</span>
            <form onSubmit={this.handleSubmit}>
              <h1>Add Design</h1>
              <InputBox
                id="title"
                name="title"
                placeholder="Enter title"
                type="text"
                onChange={this.handleChange}
                value={this.state.design.title}
              />
              <InputBox
                id="description"
                name="description"
                placeholder="Enter description"
                type="text"
                onChange={this.handleChange}
                value={this.state.design.description}
              />
              <InputBox
                id="url"
                name="url"
                placeholder="Enter url"
                type="text"
                onChange={this.handleChange}
                value={this.state.design.url}
              />
              <InputBox
                id="code"
                name="code"
                placeholder="Enter code"
                type="text"
                onChange={this.handleChange}
                value={this.state.design.code}
              />
              <br />
              Tags:{" "}
              <TagsInput
                onTagChange={this.handleTagChange}
                tags={this.state.design.tags}
              />
              <br />
              Images:{" "}
              <ImagesUpload
                onUpload={this.handleImagesUpload}
                images={this.state.design.images}
              />
              <br />
              <input type="submit" value="Create Design" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addDesign }, dispatch);
}

export default connect(null, mapDispatchToProps)(DesignForm);
