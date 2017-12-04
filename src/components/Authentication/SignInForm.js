import React from "react";
import InputBox from "../FormComponents/InputBox";
import { loginUser } from "../../actions/users";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SignInForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (id, value) => {
    switch (id) {
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
    this.props.loginUser(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="card-modal">
        <Link to="/">&times;</Link>
        <div className="modal-content signin">
          <form onSubmit={this.handleSubmit}>
            <div className="form-title">
              <h1>Welcome to Login</h1>
            </div>
            <div className="form-content">
              <div className="input-text signin">
                <InputBox
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  type="text"
                  onChange={this.handleChange}
                />
                <InputBox
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-submit-section">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { loginUser })(SignInForm);
