import React from "react";

function CheckBox(props) {
  return (
    <input
      id={props.id}
      name={props.name}
      type="checkbox"
      onChange={e => {
        props.onChange(e.target.id, e.target.checked);
      }}
      checked={props.checked}
    />
  );
}

export default CheckBox;
