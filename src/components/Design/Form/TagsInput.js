import React from "react";
import Select from "react-select";

export default class TagsInput extends React.Component {
  state = {
    options: []
  };

  render() {
    return (
      <div className="section">
        <Select.Creatable
          multi={true}
          options={this.state.options}
          onChange={value => this.props.onTagChange(value)}
          value={this.props.tags}
        />
      </div>
    );
  }
}

//https://jedwatson.github.io/react-select/
