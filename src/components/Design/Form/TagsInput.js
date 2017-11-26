import React from "react";
import Select from "react-select";

export default class TagsInput extends React.Component {
  state = {
    multi: true,
    multiValue: [],
    options: [],
    value: null
  };

  handleOnChange = value => {
    this.setState({ multiValue: value });
  };

  render() {
    console.log(
      this.state.multiValue,
      "in tag input [{value: }, {...}, {...}]"
    );
    const { multi, multiValue, options, value } = this.state;
    return (
      <div className="section">
        <Select.Creatable
          multi={multi}
          options={options}
          onChange={this.handleOnChange}
          value={multiValue}
        />
      </div>
    );
  }
}

//https://jedwatson.github.io/react-select/
