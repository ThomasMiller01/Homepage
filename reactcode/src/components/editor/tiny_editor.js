import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

class TinyEditor extends Component {
  constructor(props) {
    super(props);

    this.handleContentChange = props.handleContentChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);

    let init_default = {
      height: 400,
      plugins: [
        "code advlist anchor autolink codesample fullscreen help image imagetools",
        "lists link media noneditable preview",
        "searchreplace table template visualblocks wordcount"
      ],
      toolbar:
        "undo redo | bold italic | forecolor backcolor | codesample | alignleft aligncenter alignright alignjustify | bullist numlist | link image"
    };

    this.init = props.init ? props.init : init_default;
    this.value = props.init_value ? props.init_value : "";
  }

  handleEditorChange = (content, editor) => {
    this.value = content;
    this.handleContentChange(content);
  };

  updateContent = content => {
    this.value = content;
  };

  render() {
    return (
      <Editor
        value={this.value}
        apiKey="98olmh8w58ecwa02rwezp6u8nklm2c6wo87i9yt42dckjl3u"
        init={this.init}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default TinyEditor;
