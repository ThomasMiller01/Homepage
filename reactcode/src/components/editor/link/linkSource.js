import { Component } from "react";
import { AtomicBlockUtils } from "draft-js";

class LinkSource extends Component {
  componentDidMount() {
    const { editorState, entityType, onComplete } = this.props;

    const href = window.prompt("Link URL");

    if (href) {
      const content = editorState.getCurrentContent();
      const contentWithEntity = content.createEntity(
        entityType.type,
        "IMMUTABLE",
        { href }
      );
      const entityKey = contentWithEntity.getLastCreatedEntityKey();
      const nextState = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        " "
      );

      onComplete(nextState);
    } else {
      onComplete(editorState);
    }
  }

  render() {
    return null;
  }
}

export default LinkSource;
