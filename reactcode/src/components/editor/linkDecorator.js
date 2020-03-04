import React from "react";

const LinkDecorator = ({ entityKey, contentState, children }) => {
  const { url } = contentState.getEntity(entityKey).getData();

  return (
    <span title={url} className="Link">
      {children}
    </span>
  );
};

export default LinkDecorator;
