import React from "react";
import { Async } from "react-select";
import "react-select/dist/react-select.css";

export default class RSelect extends React.Component {
  state = {
    value: []
  };

  loadOptions = input => {
    return fetch(`https://localhost:3000/api/v1/users/4/usersselect/${input}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        json = json.map(person => ({
          value: person["id"],
          label: person["name"],
          avatar: person["avatar"]
        }));
        return { options: json };
      });
  };

  onChange = value => {
    this.setState({ value: value }, () =>
      this.props.onSelectChange(this.state.value)
    );
  };

  render() {
    return (
      <div className="section">
        <Async
          className="rselect"
          name="form-field-name"
          loadOptions={this.loadOptions}
          placeholder={this.props.text}
          multi
          onChange={this.onChange}
          value={this.props.value}
          isLoading
        />
      </div>
    );
  }
}
