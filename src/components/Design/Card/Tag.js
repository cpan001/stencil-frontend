import React from "react";

const style = { marginLeft: "2px", backgroundColor: "#999" };
function Tag(props) {
  return <span style={style}>{props.text}</span>;
}

export default Tag;
