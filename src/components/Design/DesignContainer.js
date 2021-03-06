import React from "react";
import DesignBrowser from "./DesignBrowser";
import DesignCard from "./DesignCard";
import { Route, Switch } from "react-router-dom";

export default class DesignContainer extends React.Component {
  render() {
    console.log("hit design container");
    return (
      <div>
        <Switch>
          <Route
            path="/designs/:designId"
            render={props => {
              return (
                <DesignCard
                  {...props}
                  designId={props.match.params.designId}
                  userId={this.props.userId}
                />
              );
            }}
          />
          <Route
            path="/designs"
            render={props => {
              return <DesignBrowser {...props} userId={this.props.userId} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
