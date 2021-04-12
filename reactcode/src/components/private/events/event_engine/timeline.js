import React, { Component, createRef } from "react";

class DrawTimeline extends Component {
  constructor(props) {
    super();

    this.gridTimelineRef = createRef();
  }

  render() {
    return (
      <table
        style={gridOutsideBox}
        ref={this.gridTimelineRef}
        className="events-timeline"
      >
        <tbody>
          <tr>
            <td>
              <center>--- timeline here ---</center>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

// styles
const gridOutsideBox = {
  width: "100%",
  height: "10vh",
};

export default DrawTimeline;
