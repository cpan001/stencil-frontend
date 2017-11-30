import React from "react";
import DesignCardDisplay from "../../Design/DesignCardDisplay";

function CardImages(props) {
  return (
    <div className="project-carousel-container">
      {props.designs.map(design => <DesignCardDisplay {...design} />)}
    </div>
  );
}

export default CardImages;
