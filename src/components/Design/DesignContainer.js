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
                  designId={props.match.params.designId}
                  userId={localStorage.getItem("user_id")}
                />
              );
            }}
          />
          <Route
            path="/designs"
            render={props => {
              return (
                <DesignBrowser
                  {...props}
                  userId={localStorage.getItem("user_id")}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
