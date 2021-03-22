import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super();
    this.state.text = props.text;
    this.state.url = props.url;
    this.onTextChange = props.onTextChange;
    this.onUrlChange = props.onUrlChange;
  }

  handleContentChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    if (name === "text") {
      this.onTextChange(value);
      this.setState({ text: value });
    } else {
      this.onUrlChange(value);
      this.setState({ url: value });
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.text !== this.state.text) {
      this.setState({ text: nextProps.text });
    }
    if (nextProps.url !== this.state.url) {
      this.setState({ url: nextProps.url });
    }
    return true;
  }

  state = {
    text: "",
    url: "",
  };

  render() {
    return (
      <div>
        <div className="changeProfileLinkContent" style={divStyle}>
          <b>Text</b>
          <input
            type="text"
            className="form-control"
            placeholder="Text"
            value={this.state.text}
            name="text"
            onChange={this.handleContentChange}
          />
        </div>
        <div className="changeProfileLinkContent" style={divStyle}>
          <b>Url</b>
          <input
            type="text"
            className="form-control"
            placeholder="Url"
            value={this.state.url}
            name="url"
            onChange={this.handleContentChange}
          />
        </div>
      </div>
    );
  }
}

const divStyle = {
  width: "fit-content",
  display: "inline-block",
  margin: "10px",
};

export default Content;
