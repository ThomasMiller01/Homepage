import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super();

    if (props) {
      let isNotSpecialImage = "id" in props ? true : false;
      let id = null;
      if (isNotSpecialImage) {
        id = props.id;
      }

      let dimensions = { x: -1, y: -1 };
      let unique = "unique#" + id + Math.random();

      this.state = {
        src: props.src,
        alt: props.alt,
        dimensions,
        unique,
        onChange: props.onChange,
        onDelete: props.onDelete,
        isNotSpecialImage: { value: isNotSpecialImage, id },
      };
    }

    this.imageRef = React.createRef();
  }

  state = {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png",
    alt: "None",
    dimensions: { x: -1, y: -1 },
    unique: "",
    onChange: null,
    onDelete: null,
    isNotSpecialImage: { value: false, id: null },
  };

  onImageChange = (e) => {
    let file = e.target.files[0];
    e.target.value = null;
    let imageUrl = URL.createObjectURL(file);
    if (this.state.isNotSpecialImage.value) {
      let id = this.state.isNotSpecialImage.id;
      this.state.onChange(file.name, imageUrl, "-1x-1", id);
    } else {
      this.state.onChange(file.name, imageUrl, "-1x-1");
    }
    this.setState({
      src: imageUrl,
      alt: file.name,
      dimensions: { x: -1, y: -1 },
    });
  };

  onImageDelete = (e) => {
    if (this.state.isNotSpecialImage.value) {
      let id = this.state.isNotSpecialImage.id;
      this.state.onDelete(id);
    } else {
      this.state.onDelete();
    }

    this.setState({
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1200px-No_image_available.svg.png",
      alt: "None",
      dimensions: { x: 64, y: 64 },
    });
  };

  imageLoaded = () => {
    this.setState({
      dimensions: {
        x: this.imageRef.current.width,
        y: this.imageRef.current.height,
      },
    });
    if (this.state.isNotSpecialImage.value) {
      let id = this.state.isNotSpecialImage.id;
      this.state.onChange(
        this.state.alt,
        this.state.src,
        this.imageRef.current.width + "x" + this.imageRef.current.height,
        id
      );
    } else {
      this.state.onChange(
        this.state.alt,
        this.state.src,
        this.imageRef.current.width + "x" + this.imageRef.current.height
      );
    }
  };

  getMappedDimensions = () => {
    let dimensions = this.state.dimensions;
    if (dimensions.x === -1 && dimensions.y === -1) {
      return { display: "none" };
    } else {
      let ration = dimensions.x / dimensions.y;
      let x = 64 * ration;
      let y = 64;
      // set max x size to 100
      // scale y according to x
      if (x > 100) {
        let newRation = x / 100;
        x = 100;
        y /= newRation;
      }
      return {
        width: x + "px",
        height: y + "px",
      };
    }
  };

  render() {
    return (
      <div style={imageDivStyle}>
        <div className="media" style={mediaStyle}>
          <img
            className="align-self-center mr-3"
            src={this.state.src}
            alt={this.state.alt}
            style={this.getMappedDimensions()}
            onLoad={this.imageLoaded.bind(this)}
            ref={this.imageRef}
          />
          <div className="media-body" style={mediaBodyStyle}>
            {this.state.alt}
            <button
              type="button"
              className="close"
              onClick={this.onImageDelete}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div style={fileDivStyle}>
              <input
                type="file"
                style={fileInputStyle}
                id={this.state.unique}
                onChange={this.onImageChange}
              />
              <label htmlFor={this.state.unique} style={fileLabelstyle}>
                <i className="fas fa-file-upload fileUploadIcon"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const fileLabelstyle = {
  cursor: "pointer",
};

const fileInputStyle = {
  zIndex: "2",
  width: "0px",
  opacity: "0",
};

const fileDivStyle = {
  width: "auto",
  height: "auto",
  display: "inline-block",
  float: "right",
  marginRight: "10px",
};

const mediaStyle = {
  width: "250px",
};

const mediaBodyStyle = {
  margin: "auto 0",
};

const imageDivStyle = {
  width: "100%",
  padding: "10px",
  textAlign: "left",
};

export default Image;
