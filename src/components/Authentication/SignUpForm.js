import React from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import InputBox from "../FormComponents/InputBox";
// import { createUser } from "../../services/index";
import { signUpUser } from "../../actions/users";
import { connect } from "react-redux";

const upload_preset = "kkncgfpk";
const upload_url = "https://api.cloudinary.com/v1_1/dzmtr75qy/upload";

class SignUpForm extends React.Component {
  state = {
    uploadedFileCloudinaryUrl: "",
    name: "",
    email: "",
    password: ""
  };

  //Image Drop Section
  onImageDrop = files => {
    this.setState({ uploadedFile: files[0] });
    this.handleImageUpload(files[0]);
  };

  handleImageUpload = file => {
    let upload = request
      .post(upload_url)
      .field("upload_preset", upload_preset)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.err(err);
      }

      if (response.body.secure_url !== "") {
        this.setState({ uploadedFileCloudinaryUrl: response.body.secure_url });
      }
    });
  };

  //Image Drop Section Ends

  handleChange = (id, value) => {
    switch (id) {
      case "name":
        this.setState({ name: value });
        break;
      case "email":
        this.setState({ email: value });
        break;
      case "password":
        this.setState({ password: value });
        break;
      default:
        break;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUpUser({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      avatar: this.state.uploadedFileCloudinaryUrl
    });
    // createUser({
    //   name: this.state.name,
    //   email: this.state.email,
    //   password: this.state.password,
    //   avatar: this.state.uploadedFileCloudinaryUrl
    // }).then(json => console.log(json));
  };

  render() {
    const uploadedImageSection =
      this.state.uploadedFileCloudinaryUrl === "" ? (
        <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop}>
          <p>Drop an image or click to select a file to upload</p>
        </Dropzone>
      ) : (
        <img
          src={this.state.uploadedFileCloudinaryUrl}
          alt="Profile"
          height="200px"
          width="200px"
        />
      );
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <InputBox
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <InputBox
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <InputBox
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />
          <label htmlFor="avatar">Avatar: </label>
          {uploadedImageSection}
          <input
            type="hidden"
            name="avatar"
            value={this.state.uploadedFileCloudinaryUrl}
          />
          <br />
          <br />
          <input type="submit" value="Create My Account" />
        </form>
      </div>
    );
  }
}

export default connect(null, { signUpUser })(SignUpForm);
