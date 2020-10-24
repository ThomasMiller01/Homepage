import React, { Component } from "react";

class DrawControls extends Component {
  constructor(props) {
    super();
    if (props.legend !== undefined) {
      this.state.legend = props.legend;
    } else {
      this.state.legend = {
        example: "example legend",
      };
    }

    this.setNewIntervallFunction = props.newIntervall;
    this.setNewIntervallTypeFunction = props.newIntervallType;

    this.intervall_types = props.intervall_types;
  }

  state = {
    legend: {},
    intervall: { value: -1, type: "choose" },
    time: {
      start: new Date(),
      end: new Date(),
    },
  };

  setNewIntervall = (event) => {
    let intervall_value = event.target.value;
    let intervall = this.state.intervall;
    intervall.value = intervall_value;
    this.setState({ intervall });
    this.setNewIntervallFunction(intervall_value);
  };

  setNewIntervallType = (event) => {
    let intervall_type = event.target.value;
    let intervall = this.state.intervall;
    intervall.type = intervall_type;
    this.setState({ intervall });
    this.setNewIntervallTypeFunction(intervall_type);
  };

  updateLegend = (legend) => {
    this.setState({ legend });
  };

  updateIntervall = (intervall) => {
    this.setState({ intervall });
  };

  updateTime = (time) => {
    this.setState({ time });
  };

  render() {
    return (
      <div style={controlsBox}>
        <div style={controlsStyle}>
          <div style={controlsTimeStyle}>
            <b>start:</b> {this.formatDate(this.state.time.start)}, <b>end:</b>{" "}
            {this.formatDate(this.state.time.end)}
          </div>
          <div style={controlsTimeIntervallStyle}>
            <div className="row">
              <div className="col-sm">
                <b>intervall:</b>
              </div>
              <div className="col-sm">
                <input
                  type="number"
                  className="form-control"
                  style={intervallInputStyle}
                  placeholder="intervall"
                  value={parseInt(this.state.intervall.value)}
                  onChange={this.setNewIntervall}
                />
              </div>
              <div className="col-sm">
                <select
                  className="custom-select"
                  id="inputGroupSelect03"
                  aria-label="Example select with button addon"
                  value={this.state.intervall.type}
                  onChange={this.setNewIntervallType}
                >
                  <option value="choose">choose</option>
                  {Object.keys(this.intervall_types).map((key, index) => (
                    <option key={index} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div style={legendStyle}>
          <div style={legendItemsStyle}>
            {Object.keys(this.state.legend).map((key, index) => (
              <div style={legendKeyStyle} key={index}>
                <b>{key}</b>: {this.state.legend[key]}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  formatDate = (date) => {
    return (
      date.getDate() +
      "-" +
      date.getMonth() +
      "-" +
      date.getFullYear() +
      " " +
      date.toLocaleTimeString()
    );
  };
}

// styles
const intervallInputStyle = {
  display: "inline-block",
};

const controlsTimeStyle = {
  width: "69.5%",
  minHeight: "8vh",
  marginRight: "0.5%",
  display: "inline-block",
  float: "left",
  padding: "10px",
  border: "dashed 1px",
};

const controlsTimeIntervallStyle = {
  width: "29.5%",
  minHeight: "8vh",
  marginLeft: "0.5%",
  display: "inline-block",
  float: "right",
  padding: "10px",
  border: "dashed 1px",
};

const legendItemsStyle = {
  padding: "5px",
  minWidth: "100%",
  minHeight: "100%",
  display: "inline-block",
};

const legendKeyStyle = {
  display: "inline-block",
  width: "fit-content",
  padding: "3px",
  margin: "3px",
  border: "dashed 1px",
};

const controlsBox = {
  height: "10vh",
  margin: "10px",
};

const controlsStyle = {
  width: "69.5%",
  minHeight: "10vh",
  backgroundColor: "lightGray",
  marginRight: "0.5%",
  display: "inline-block",
  float: "left",
  padding: "1vh",
};

const legendStyle = {
  width: "29.5%",
  minHeight: "10vh",
  marginLeft: "0.5%",
  backgroundColor: "lightGray",
  display: "inline-block",
  float: "right",
};

export default DrawControls;
