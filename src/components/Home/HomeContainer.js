import React from "react";

export default class HomeContainer extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="parallax">
          {" "}
          <div id="home-title">Stencïl</div>
          <div id="home-tagline">Where Design Meets Code</div>
        </div>
        <div className="home-content">
          <div className="home-description">
            <p id="home-description-for">
              for <em>Designers</em> and <em>Engineers</em>
            </p>
          </div>
          <div className="home-description">
            <p id="home-description-about">
              Discover and share design ideas. <br />Save all your favorites in
              1 place. <br />Get code to build and deploy.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
