import React from "react";
import DesignBrowser from "./DesignBrowser";
import DesignCard from "./DesignCard";
import { Route, Switch } from "react-router-dom";

export default class DesignContainer extends React.Component {
  render() {
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
          <Route path="/designs" component={DesignBrowser} />
        </Switch>
      </div>
    );
  }
}
