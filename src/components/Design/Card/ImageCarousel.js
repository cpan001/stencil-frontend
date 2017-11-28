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
        width="200px"
        height="200px"
        key={image.id}
        alt=""
        style={{
          display: this.state.slideIndex - 1 === idx ? "block" : "none"
        }}
      />
    ));
    return (
      <div className="image-carousel">
        {images}
        <button type="button" onClick={this.handleMinusIndex}>
          &#10094;
        </button>
        <button type="button" onClick={this.handleAddIndex}>
          &#10095;
        </button>
      </div>
    );
  }
}
