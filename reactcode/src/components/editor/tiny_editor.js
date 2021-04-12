import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

class TinyEditor extends Component {
  constructor(props) {
    super(props);

    this.handleContentChange = props.handleContentChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);

    let init_default = {
      min_height: 400,
      plugins: [
        "lists advlist autolink anchor autoresize codesample help hr image imagetools link media preview print quickbars searchreplace table textpattern toc visualblocks wordcount",
      ],
      toolbar:
        "undo redo | bold italic underline | formatselect  | alignleft aligncenter alignright alignjustify | bullist numlist | table link",
      quickbars_selection_toolbar:
        "bold italic underline | alignleft aligncenter alignright alignjustify | link blockquote",
      fontsize_formats: "8pt 9pt 10pt 11pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt",
      codesample_languages: [
        { text: "Python", value: "python" },
        { text: "C#", value: "csharp" },
        { text: "HTML/XML", value: "markup" },
        { text: "JavaScript", value: "javascript" },
        { text: "Java", value: "java" },
        { text: "CSS", value: "css" },
        { text: "C", value: "c" },
        { text: "C++", value: "cpp" },
      ],
      link_list: [
        {
          title: "info@thomasmiller.info",
          value: "mailto:info@thomasmiller.info",
        },
        { title: "GitHub", value: "https://github.com/ThomasMiller0" },
        {
          title: "Xing",
          value: "https://www.xing.com/profile/Thomas_Miller108",
        },
        {
          title: "LinkedIn",
          value: "https://www.linkedin.com/in/thomas-miller-2a13991b1",
        },
        { title: "My Blog", value: "https://thomasmiller.info/blog" },
      ],
      textpattern_patterns: [
        { start: "*", end: "*", format: "italic" },
        { start: "**", end: "**", format: "bold" },
        { start: "__", end: "__", format: "underline" },
        { start: "~", end: "~", format: "blockquote" },
        { start: "#", format: "h1" },
        { start: "##", format: "h2" },
        { start: "###", format: "h3" },
        { start: "- ", cmd: "InsertUnorderedList" },
        { start: "* ", cmd: "InsertUnorderedList" },
        {
          start: "1. ",
          cmd: "InsertOrderedList",
          value: { "list-style-type": "decimal" },
        },
        { start: "---", replacement: "<hr/>" },
      ],
      toc_depth: 4,
      toolbar_mode: "wrap",
      toolbar_sticky: true,
      branding: false,
      draggable_modal: true,
      relative_urls: false,
      link_assume_external_targets: "https",
      link_title: false,
      quickbars_image_toolbar: false,
      quickbars_insert_toolbar: false,
      content_css: "/editor.css",
    };

    this.init = props.init ? props.init : init_default;
    this.value = props.init_value ? props.init_value : "";
  }

  handleEditorChange = (content, editor) => {
    this.value = content;
    this.handleContentChange(content);
  };

  updateContent = (content) => {
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
