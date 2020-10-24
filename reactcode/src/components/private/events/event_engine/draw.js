import React, { Component, createRef } from "react";

import { BorderTop, BorderSide, BorderBottom } from "./border";

class Draw extends Component {
  constructor(props) {
    super();
    if (props.init === undefined || props.init.length === 0) {
      let grid = [];
      for (let x = 0; x < this.state.size.width; x++) {
        grid.push([]);
        for (let y = 0; y < this.state.size.height; y++) {
          grid[x].push({ content: null, color: "transparent" });
        }
      }
      this.state.grid = grid;

      let timelines = {
        left: [],
        bottom: [],
      };
      this.state.timelines = timelines;
    } else {
      this.state.grid = props.init.grid;
      this.state.timelines = props.init.timelines;
    }

    this.gridBoxRef = createRef();
    this.borderLeftRef = createRef();
    this.borderBottomRef = createRef();
  }

  componentDidMount() {
    this.setColumnRowSize(this.state.grid[0].length, this.state.grid.length);
  }

  updateGrid = (grid, timelines = null) => {
    if (grid.length === 0)
      grid = [[{ content: "No events registered", color: "transparent" }]];
    this.setColumnRowSize(grid[0].length, grid.length);
    this.setState({ grid });
    if (timelines !== null) {
      this.setState({ timelines });
      this.borderLeftRef.current.updateTimeline(timelines.left);
      this.borderBottomRef.current.updateTimeline(timelines.bottom);
    }
  };

  state = {
    timelines: {
      left: [],
      bottom: [],
    },
    grid: [],
    size: {
      width: 50,
      height: 50,
    },
    loaded: false,
  };

  setFieldContent = (pos, content) => {
    let grid = this.state.grid;
    grid[pos.x][pos.y].content = content;
    this.setState({ grid });
  };

  setFieldColor = (pos, color) => {
    let grid = this.state.grid;
    grid[pos.x][pos.y].color = color;
    this.setState({ grid });
  };

  render() {
    return (
      <React.Fragment>
        <div style={borderDiv}>
          <BorderTop />
          <BorderSide
            fields={this.state.timelines.left}
            visible={true}
            type="left"
            ref={this.borderLeftRef}
          />
          <BorderSide visible={true} type="right" />
          <div style={innerBorderDiv}>
            <div style={gridDivBox} ref={this.gridBoxRef}>
              <table style={gridOutsideBox}>
                <tbody>
                  {this.state.loaded &&
                    this.state.grid.map((y, y_index) => (
                      <tr style={this.getGridXBoxStyle()} key={y_index}>
                        {y.map((x, x_index) => (
                          <td
                            style={this.getGridYBoxStyle(
                              x_index,
                              y_index,
                              x.color
                            )}
                            key={x_index}
                            id={
                              "grid_" +
                              y_index.toString() +
                              "_" +
                              x_index.toString()
                            }
                          >
                            <div style={this.getGridItemStyle()}>
                              {x.content}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <BorderBottom
          fields={this.state.timelines.bottom}
          ref={this.borderBottomRef}
        />
      </React.Fragment>
    );
  }

  setColumnRowSize = (x, y) => {
    let maxWidth = this.gridBoxRef.current.clientWidth;
    let maxHeight = this.gridBoxRef.current.clientHeight;
    let width = maxWidth / x;
    let height = maxHeight / y;
    let size = {
      width,
      height,
    };
    this.setState({ size, loaded: true });
  };

  getGridItemStyle = () => {
    return {
      height: this.state.size.height.toString() + "px",
      maxHeight: this.state.size.height.toString() + "px",
      minHeight: this.state.size.height.toString() + "px",
      width: "100%",
    };
  };

  getGridYBoxStyle = (x_index, y_index, backgroundColor) => {
    let fontSize = "10px";
    return {
      width: this.state.size.width.toString() + "px",
      maxWidth: this.state.size.width.toString() + "px",
      overflow: "visible",
      backgroundColor: backgroundColor,
      fontSize: fontSize.toString() + "px",
      border: "dotted 1px #C5C3C6",
      textAlign: "center",
      height: this.state.size.height.toString() + "px",
      maxHeight: this.state.size.height.toString() + "px",
      minHeight: this.state.size.height.toString() + "px",
    };
  };

  getGridXBoxStyle = () => {
    return {
      width: "100%",
      border: "solid 1px #C5C3C6",
      height: this.state.size.height.toString() + "px",
      maxHeight: this.state.size.height.toString() + "px",
      minHeight: this.state.size.height.toString() + "px",
    };
  };
}

// styles
const gridDivBox = {
  width: "100%",
  minHeight: "70vh",
};

const gridOutsideBox = {
  width: "100%",
  height: "70vh",
};

const borderDiv = {
  minWidth: "100%",
};

const innerBorderDiv = {
  minHeight: "100%",
  margin: "1vh 2vw",
  position: "relative",
  top: "-1vh",
};

export default Draw;
