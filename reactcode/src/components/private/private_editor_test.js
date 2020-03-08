import React, { Component } from "react";

import MyEditor from "../editor/editor";

class PrivateEditorTest extends Component {
  constructor() {
    super();
    this.Editor = new MyEditor({
      getEditorOutput: this.getEditorOutput
    });
  }

  state = {
    editorOutput: ""
  };

  getEditorOutput = content => {
    let html_content = this.Editor.toHTML(content);
    this.setState({ editorOutput: html_content });
  };

  render() {
    return (
      <div style={privateEditorTestStyle}>
        <center>
          <h1 style={privateEditorTestH1Style}>EditorTest</h1>
          <div style={editor_style}>
            {this.Editor.render()}
            <hr></hr>
            <div
              dangerouslySetInnerHTML={{
                __html: this.state.editorOutput
              }}
            ></div>
          </div>
        </center>
      </div>
    );
  }
}

// Styles
const editor_style = {
  width: "70%"
};

const privateEditorTestH1Style = {
  margin: "0"
};

const privateEditorTestStyle = {
  width: "100%",
  minHeight: "93.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "10px"
};

export default PrivateEditorTest;
