import React, { Component } from "react";
import {
  DraftailEditor,
  BLOCK_TYPE,
  INLINE_STYLE,
  ENTITY_TYPE
} from "draftail";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { convertFromHTML, convertToHTML } from "draft-convert";

import ImageSource from "./image/imageSource";
import ImageBlock from "./image/imageBlock";

import LinkBlock from "./link/linkBlock";
import LinkSource from "./link/linkSource";

import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.importerConfig = {
      htmlToEntity: (nodeName, node, createEntity) => {
        // a tags will become LINK entities, marked as mutable, with only the URL as data.
        if (nodeName === "a") {
          return createEntity(ENTITY_TYPE.LINK, "MUTABLE", { url: node.href });
        }

        if (nodeName === "img") {
          return createEntity(ENTITY_TYPE.IMAGE, "IMMUTABLE", {
            src: node.src
          });
        }

        if (nodeName === "hr") {
          return createEntity(ENTITY_TYPE.HORIZONTAL_RULE, "IMMUTABLE", {});
        }

        return null;
      },
      htmlToBlock: nodeName => {
        if (nodeName === "hr" || nodeName === "img") {
          // "atomic" blocks is how Draft.js structures block-level entities.
          return "atomic";
        }

        return null;
      }
    };

    this.exporterConfig = {
      blockToHTML: block => {
        if (block.type === BLOCK_TYPE.BLOCKQUOTE) {
          return <blockquote />;
        }

        // Discard atomic blocks, as they get converted based on their entity.
        if (block.type === BLOCK_TYPE.ATOMIC) {
          return {
            start: "",
            end: ""
          };
        }

        return null;
      },

      entityToHTML: (entity, originalText) => {
        if (entity.type === ENTITY_TYPE.LINK) {
          return <a href={entity.data.url}>{originalText}</a>;
        }

        if (entity.type === ENTITY_TYPE.IMAGE) {
          return <img src={entity.data.src} alt={entity.data.alt} />;
        }

        if (entity.type === ENTITY_TYPE.HORIZONTAL_RULE) {
          return <hr />;
        }

        return originalText;
      }
    };
  }

  updateContent(content) {
    this.setState({
      editorState: EditorState.createWithContent(this.fromHtml(content))
    });
  }

  onChange = editorState => {
    this.setState({
      editorState: editorState
    });
  };

  state = {
    editorState: EditorState.createEmpty()
  };

  fromHtml = html => {
    return convertFromHTML(this.importerConfig)(html);
  };

  toHTML = raw => {
    let converted = raw
      ? convertToHTML(this.exporterConfig)(convertFromRaw(raw))
      : "";
    console.log(converted);
    return converted;
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={() => this.fromHtml("test123")}>Convert</button>
        </div>
        <DraftailEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
          stripPastedStyles={false}
          enableHorizontalRule={{
            description: "Horizontal rule"
          }}
          enableLineBreak={{
            description: "Soft line break"
          }}
          showUndoControl={{
            description: "Undo last change"
          }}
          showRedoControl={{
            description: "Redo last change"
          }}
          blockTypes={[
            { type: BLOCK_TYPE.HEADER_ONE },
            { type: BLOCK_TYPE.HEADER_TWO },
            { type: BLOCK_TYPE.HEADER_THREE },
            { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
            { type: BLOCK_TYPE.CODE },
            { type: BLOCK_TYPE.BLOCKQUOTE }
          ]}
          inlineStyles={[
            { type: INLINE_STYLE.BOLD },
            { type: INLINE_STYLE.ITALIC },
            { type: INLINE_STYLE.UNDERLINE }
          ]}
          entityTypes={[
            {
              type: ENTITY_TYPE.LINK,
              description: "Link",
              source: LinkSource,
              block: LinkBlock,
              attributes: ["url"],
              whitelist: {
                href: "^(?![#/])"
              }
            },
            {
              type: ENTITY_TYPE.IMAGE,
              description: "Image",
              source: ImageSource,
              block: ImageBlock,
              attributes: ["src", "alt"],
              whitelist: {
                src: "^(?!(data:|file:))"
              }
            }
          ]}
        />
      </React.Fragment>
    );
  }
}

export default Editor;
