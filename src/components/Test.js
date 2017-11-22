import React from "react";
import Dropzone from "react-dropzone";
import request from "superagent";

//check if right data
const upload_preset = "kkncgfpk";
const upload_url = "https://api.cloudinary.com/v1_1/dzmtr75qy/upload";

export default class Test extends React.Component {
  state = {
    uploadedFileCloudinaryUrl: ""
  };

  onImageDrop(files) {
    this.setState({ uploadedFile: files[0] });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request
      .post(upload_url)
      .field("upload_preset", upload_preset)
      .field("file", file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== "") {
        this.setState({ uploadedFileCloudinaryUrl: response.body.secure_url });
      }
    });
  }

  render() {
    console.log(this.state.uploadedFileCloudinaryUrl);
    const image =
      this.state.uploadedFileCloudinaryUrl === "" ? null : (
        <div>
          <p>{this.state.uploadedFile.name}</p>
          <img src={this.state.uploadedFileCloudinaryUrl} />
        </div>
      );
    return (
      <div>
        <div className="fileupload">
          <Dropzone
            multiple={true}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}
          >
            <p>Drop image</p>
          </Dropzone>
        </div>
        <div>{image}</div>
      </div>
    );
  }
}
