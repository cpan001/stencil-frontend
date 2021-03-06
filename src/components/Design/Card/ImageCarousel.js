import React from "react";

export default class ImageCarousel extends React.Component {
  state = {
    slideIndex: 1
  };

  handleAddIndex = () => {
    if (this.state.slideIndex === this.props.number) {
      this.setState({ slideIndex: 1 });
    } else {
      this.setState({ slideIndex: this.state.slideIndex + 1 });
    }
  };

  handleMinusIndex = () => {
    if (this.state.slideIndex === 1) {
      this.setState({ slideIndex: this.props.number });
    } else {
      this.setState({ slideIndex: this.state.slideIndex - 1 });
    }
  };
  render() {
    const images = this.props.images.map((image, idx) => (
      <img
        className="design-images"
        src={image.filename}
        key={image.id}
        alt=""
        style={{
          display: this.state.slideIndex - 1 === idx ? "block" : "none"
        }}
      />
    ));
    const showArrows = images.length > 1;
    return (
      <div className="image-carousel">
        {images}{" "}
        {showArrows && (
          <div onClick={this.handleMinusIndex} className="left-image-click">
            <i className="material-icons">keyboard_arrow_left</i>
          </div>
        )}
        {showArrows && (
          <div onClick={this.handleAddIndex} className="right-image-click">
            <i className="material-icons">keyboard_arrow_right</i>
          </div>
        )}
      </div>
    );
  }
}
