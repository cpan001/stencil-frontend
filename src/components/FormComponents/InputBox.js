import React from "react";

function InputBox(props) {
  return (
    <input
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      onChange={e => {
        props.onChange(e.target.id, e.target.value);
      }}
      value={props.value}
    />
  );
}

export default InputBox;
