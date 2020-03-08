import React from "react";

import "./tooltip.css";

const TOP = "top";
const LEFT = "left";
const TOP_LEFT = "top-left";

const getTooltipStyles = (target, direction) => {
  const top = window.pageYOffset + target.top;
  const left = window.pageXOffset + target.left;
  switch (direction) {
    case TOP:
      return {
        top: top + target.height,
        left: left + target.width / 2
      };
    case LEFT:
      return {
        top: top + target.height / 2,
        left: left + target.width
      };
    case TOP_LEFT:
    default:
      return {
        top: top + target.height,
        left
      };
  }
};

/**
 * A tooltip, with arbitrary content.
 */
const Tooltip = ({ target, children, direction }) => (
  <div
    style={getTooltipStyles(target, direction)}
    className={`Tooltip Tooltip--${direction}`}
    role="tooltip"
  >
    {children}
  </div>
);

export default Tooltip;
