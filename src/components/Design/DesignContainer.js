import React from "react";
import DesignBrowser from "./DesignBrowser";

export default class DesignContainer extends React.Component {
  render() {
    return (
      <div>
        designs
        <DesignBrowser />
      </div>
    );
  }
}
