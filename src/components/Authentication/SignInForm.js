import React from "react";
import InputBox from "../FormComponents/InputBox";

export default class SignInForm extends React.Component {
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
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div>
        <h1>Welcome to Login</h1>
        <form onSubmit={this.handleSubmit}>
          Name:{" "}
          <InputBox
            id="email"
            name="email"
            placeholder="Enter email"
            type="text"
            onChange={this.handleChange}
          />
          Password:{" "}
          <InputBox
            id="password"
            name="password"
            placeholder="Enter password"
            type="password"
            onChange={this.handleChange}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
