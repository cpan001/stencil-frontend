import React from "react";
import Dropzone from "react-dropzone";
import request from "superagent";

const upload_preset = "kkncgfpk";
const upload_url = "https://api.cloudinary.com/v1_1/dzmtr75qy/upload";

export default class ImagesUpload extends React.Component {
  onImageDrop = files => {
    this.setState({ uploadedFiles: files });
    files.forEach(file => this.handleImageUpload(file));
  };

  handleImageUpload = file => {
    let upload = request
      .post(upload_url)
      .field("upload_preset", upload_preset)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.err(err);
      }

      if (response.body.secure_url !== "") {
        this.props.onUpload(response.body.secure_url);
      }
    });
  };

  render() {
    const images = this.props.images.map(image => (
      <img
        src={image.filename}
        key={image.filename}
        height="100px"
        width="100px"
        alt=""
      />
    ));
    console.log(this.props.images);
    return (
      <div className="image-upload">
        <div className="images-uploaded">{images} </div>

        <Dropzone
          className="dropzone"
          multiple={true}
          accept="image/*"
          onDrop={this.onImageDrop}
        >
          <p>Drag or Upload Photo(s)</p>
        </Dropzone>
      </div>
    );
  }
}
