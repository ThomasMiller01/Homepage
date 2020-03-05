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

import "./editor.scss";

import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.size = ["100%", "300px"] ? !this.props.size : this.props.size;

    this.convertToRaw = convertToRaw;

    this.getEditorOutput = this.props.getEditorOutput;

    this.editorState = EditorState.createEmpty();

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
        if (nodeName === "hr" || nodeName === "img" || nodeName === "a") {
          // "atomic" blocks is how Draft.js structures block-level entities.
          return "atomic";
        }

        return null;
      }
    };

    this.exporterConfig = {
      blockToHTML: block => {
        if (block.type === BLOCK_TYPE.BLOCKQUOTE) {
          return <blockquote className="blockquote" />;
        }

        // Discard atomic blocks, as they get converted based on their entity.
        if (block.type === BLOCK_TYPE.ATOMIC) {
          return {
            start: "",
            end: ""
          };
        }

        if (block.type === BLOCK_TYPE.CODE) {
          return <code />;
        }

        return null;
      },

      entityToHTML: (entity, originalText) => {
        if (entity.type === ENTITY_TYPE.LINK) {
          return <a href={entity.data.url}>{entity.data.url}</a>;
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
    this.editorState = EditorState.createWithContent(this.fromHtml(content));
  }

  onChange = editorState => {
    this.getEditorOutput(convertToRaw(editorState.getCurrentContent()));
    this.editorState = editorState;
  };

  fromHtml = html => {
    return convertFromHTML(this.importerConfig)(html);
  };

  toHTML = raw => {
    return raw ? convertToHTML(this.exporterConfig)(convertFromRaw(raw)) : "";
  };

  render() {
    return (
      <DraftailEditor
        editorState={this.editorState}
        onChange={this.onChange}
        enableHorizontalRule={true}
        enableLineBreak={false}
        spellCheck={true}
        stripPastedStyles={false}
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
          {
            type: BLOCK_TYPE.UNORDERED_LIST_ITEM,
            icon: [
              "M160 736H32a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32zm0-640H32A32 32 0 0 0 0 128v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32zm0 320H32a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32v-128a32 32 0 0 0-32-32zm832 352H352a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32zm0-640H352a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 320H352a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32z"
            ]
          },
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
            icon: [
              "M440.236 635.766c-13.31 0-26.616-5.076-36.77-15.23-95.134-95.136-95.134-249.934 0-345.070l192-192c46.088-46.086 107.36-71.466 172.534-71.466s126.448 25.38 172.536 71.464c95.132 95.136 95.132 249.934 0 345.070l-87.766 87.766c-20.308 20.308-53.23 20.308-73.54 0-20.306-20.306-20.306-53.232 0-73.54l87.766-87.766c54.584-54.586 54.584-143.404 0-197.99-26.442-26.442-61.6-41.004-98.996-41.004s-72.552 14.562-98.996 41.006l-192 191.998c-54.586 54.586-54.586 143.406 0 197.992 20.308 20.306 20.306 53.232 0 73.54-10.15 10.152-23.462 15.23-36.768 15.23z",
              "M256 1012c-65.176 0-126.45-25.38-172.534-71.464-95.134-95.136-95.134-249.934 0-345.070l87.764-87.764c20.308-20.306 53.234-20.306 73.54 0 20.308 20.306 20.308 53.232 0 73.54l-87.764 87.764c-54.586 54.586-54.586 143.406 0 197.992 26.44 26.44 61.598 41.002 98.994 41.002s72.552-14.562 98.998-41.006l192-191.998c54.584-54.586 54.584-143.406 0-197.992-20.308-20.308-20.306-53.232 0-73.54 20.306-20.306 53.232-20.306 73.54 0.002 95.132 95.134 95.132 249.932 0.002 345.068l-192.002 192c-46.090 46.088-107.364 71.466-172.538 71.466z"
            ],
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
            icon: [
              "M959.884 128c0.040 0.034 0.082 0.076 0.116 0.116v767.77c-0.034 0.040-0.076 0.082-0.116 0.116h-895.77c-0.040-0.034-0.082-0.076-0.114-0.116v-767.772c0.034-0.040 0.076-0.082 0.114-0.114h895.77zM960 64h-896c-35.2 0-64 28.8-64 64v768c0 35.2 28.8 64 64 64h896c35.2 0 64-28.8 64-64v-768c0-35.2-28.8-64-64-64v0z",
              "M832 288c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.98 96 96z",
              "M896 832h-768v-128l224-384 256 320h64l224-192z"
            ],
            source: ImageSource,
            block: ImageBlock,
            attributes: ["src", "alt"],
            whitelist: {
              src: "^(?!(data:|file:))"
            }
          }
        ]}
      />
    );
  }
}

export default Editor;
