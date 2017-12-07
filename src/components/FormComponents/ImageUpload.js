import React from "react";
import Dropzone from "react-dropzone";

function ImageUpload(props) {
  const image = <img id="uploaded-profile-pic" src={props.imageURL} alt="" />;

  const showSection = !!props.imageURL ? (
    image
  ) : (
    <p>Drag or Upload Profile Picture</p>
  );
  console.log(!!props.imageURL, "in image");
  return (
    <div className="image-upload">
      <Dropzone
        className="dropzone"
        multiple={false}
        accept="image/*"
        onDrop={file => props.onImageDrop(file)}
      >
        {showSection}
      </Dropzone>
    </div>
  );
}

export default ImageUpload;
