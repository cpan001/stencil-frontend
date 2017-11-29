import React from "react";
import { Async, Select } from "react-select";
import "react-select/dist/react-select.css";

export default class RSelect extends React.Component {
  state = {
    value: []
  };

  loadOptions = input => {
    return fetch(`http://localhost:3000/api/v1/users/4/usersselect/${input}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        json = json.map(person => ({
          value: person["id"],
          label: person["name"]
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
      <div>
        <p>Collaborators</p>
        <Async
          name="form-field-name"
          value="one"
          loadOptions={this.loadOptions}
          multi
          onChange={this.onChange}
          value={this.state.value}
          isLoading
        />
      </div>
    );
  }
}
