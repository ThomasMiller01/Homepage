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

  onChangeStart = (event) => {
    let value = event.target.value.toString().replace("T", " ");
    let time = this.state.time;
    time.start = new Date(value);
    this.setState({ time });
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
          <div style={controlsTimeStyle} className="events-controls">
            <b>start:</b>{" "}
            <input
              type="datetime-local"
              className="events-controls-datetime-input"
              value={this.formatDate(this.state.time.start)}
              onChange={this.onChangeStart}
            />
            , <b>end:</b>{" "}
            <input
              type="datetime-local"
              className="events-controls-datetime-input"
              value={this.formatDate(this.state.time.end)}
              onChange={this.onChangeStart}
            />
          </div>
          <div style={controlsTimeIntervallStyle} className="events-controls">
            <div className="row">
              <div className="col-sm">
                <b>intervall:</b>
              </div>
              <div className="col-sm">
                <input
                  type="number"
                  className="form-control text-input"
                  style={intervallInputStyle}
                  placeholder="intervall"
                  value={parseInt(this.state.intervall.value)}
                  onChange={this.setNewIntervall}
                />
              </div>
              <div className="col-sm">
                <select
                  className="custom-select project-select"
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
        <div style={legendStyle} className="events-controls">
          <div style={legendItemsStyle}>
            {Object.keys(this.state.legend).map((key, index) => (
              <div
                style={legendKeyStyle}
                key={index}
                className="events-legend-item"
              >
                <b>{key}</b>: {this.state.legend[key]}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  formatDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    return year + "-" + month + "-" + day + "T" + hours + ":" + minutes;
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
  marginRight: "0.5%",
  display: "inline-block",
  float: "left",
  padding: "1vh",
};

const legendStyle = {
  width: "29.5%",
  minHeight: "10vh",
  marginLeft: "0.5%",
  display: "inline-block",
  float: "right",
};

export default DrawControls;
