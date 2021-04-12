import React, { Component, createRef } from "react";

class BorderTop extends Component {
  render() {
    return <div style={borderTopStyle}></div>;
  }
}

class BorderSide extends Component {
  constructor(props) {
    super();
    this.state.type = props.type;
    this.state.visible = props.visible;
    if (props.fields) {
      this.state.fields = props.fields;
    } else {
      this.state.fields = [];
    }

    this.boxRef = createRef();
  }

  state = {
    fields: [],
    height: 0,
    visible: true,
    type: "left",
  };

  componentDidMount() {
    this.getFieldSize(this.state.fields);
  }

  updateTimeline = (timeline) => {
    this.setState({ fields: timeline });
    this.getFieldSize(timeline);
  };

  getFieldSize = (fields) => {
    let maxHeight = this.boxRef.current.clientHeight;
    let height = maxHeight / fields.length;
    this.setState({ height });
  };

  render() {
    let style;
    if (this.state.type === "left") {
      style = Object.assign({ left: "30px" }, borderSideStyle);
    } else {
      style = Object.assign({ right: "30px" }, borderSideStyle);
    }
    if (!this.state.visible) {
      style = Object.assign({ visibility: "hidden" }, style);
    }
    return (
      <div style={style}>
        <div style={borderSideTimelineStyle} ref={this.boxRef}>
          <table style={this.tableStyle} className="events-border">
            <tbody>
              {this.state.fields.map((field, index) => (
                <tr style={this.getFieldStyle(index)} key={index}>
                  <td style={this.tdStyle}>{field}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  getFieldStyle = (index) => {
    return {
      height: this.state.height.toString() + "px",
      border: "dotted 1px",
    };
  };

  tableStyle = {
    width: "100%",
    minHeight: "70vh",
    border: "solid 1px",
  };

  tdStyle = {
    textAlign: "center",
  };
}

class BorderBottom extends Component {
  constructor(props) {
    super();
    if (props.fields) {
      this.state.fields = props.fields;
    } else {
      this.state.fields = [];
    }

    this.boxRef = createRef();
  }

  state = {
    fields: [],
    width: 0,
  };

  componentDidMount() {
    this.getFieldSize(this.state.fields);
  }

  updateTimeline = (timeline) => {
    this.getFieldSize(timeline);
    this.setState({ fields: timeline });
  };

  getFieldSize = (fields) => {
    let maxWidth = this.boxRef.current.clientWidth;
    let width = maxWidth / fields.length;
    this.setState({ width });
  };

  render() {
    return (
      <div style={borderBottomStyle}>
        <div style={borderBottomTimelineStyle} ref={this.boxRef}>
          <table style={this.tableStyle} className="events-border">
            <tbody>
              <tr>
                {this.state.fields.map((field, index) => (
                  <td style={this.getFieldStyle(index)} key={index}>
                    {field}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  getFieldStyle = (index) => {
    return {
      width: this.state.width.toString() + "px",
      maxWidth: this.state.width.toString() + "px",
      textAlign: "center",
      border: "dotted 1px",
      overflow: "visible",
    };
  };

  tableStyle = {
    width: "100%",
    minHeight: "2vh",
    border: "solid 1px",
  };
}

// styles
const borderTopStyle = {
  minWidth: "100%",
  minHeight: "1vh",
};

const borderSideStyle = {
  width: "2vw",
  minHeight: "70vh",
  position: "absolute",
  padding: "0 0.5vw",
};

const borderSideTimelineStyle = {
  width: "1vw",
  minHeight: "70vh",
};

const borderBottomTimelineStyle = {
  minHeight: "2vh",
  width: "100%",
};

const borderBottomStyle = {
  minWidth: "100%",
  minHeight: "3vh",
  position: "relative",
  bottom: "2vh",
  padding: "0.5vh 2vw",
};

export { BorderTop, BorderSide, BorderBottom };
