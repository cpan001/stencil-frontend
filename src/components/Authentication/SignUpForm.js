import React from "react";
import request from "superagent";
import InputBox from "../FormComponents/InputBox";
import ImageUpload from "../FormComponents/ImageUpload";
// import { createUser } from "../../services/index";
import { signUpUser } from "../../actions/users";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
    return (
      <div className="card-modal">
        <Link to="/">&times;</Link>
        <div className="modal-content signup">
          <form onSubmit={this.handleSubmit}>
            <div className="form-title">
              <h1>Sign Up</h1>
            </div>
            <div className="form-content">
              <ImageUpload
                imageURL={this.state.uploadedFileCloudinaryUrl}
                onImageDrop={this.onImageDrop}
              />
              <div className="input-text signup">
                <InputBox
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />

                <InputBox
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />

                <InputBox
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
                <input
                  type="hidden"
                  name="avatar"
                  value={this.state.uploadedFileCloudinaryUrl}
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
    );
  }
}

export default connect(null, { signUpUser })(SignUpForm);
