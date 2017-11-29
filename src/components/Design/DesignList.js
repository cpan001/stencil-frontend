import React from "react";
import DesignCardDisplay from "./DesignCardDisplay";

function DesignList(props) {
  console.log(props, "in design list");
  const designCards = props.designs
    ? props.designs.map(design => (
        <DesignCardDisplay {...design} key={design.id} />
      ))
    : null;
  return <div className="design-list">{designCards}</div>;
}

export default DesignList;
