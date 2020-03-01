import React, { Component } from "react";
import CanvasJSReact from "../../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DynamicLiveLineChart extends Component {
  constructor(name) {
    super();
    this.updateChart = this.updateChart.bind(this);
    this.dps = [];
    this.xVal = this.dps.length;
    this.name = name;
  }

  updateChart(data) {
    this.xVal++;
    this.dps.push({ x: this.xVal, y: data });
    if (this.dps.length > 10) {
      this.dps.shift();
    }
    if (this.chart) {
      this.chart.render();
    }
  }

  render() {
    const options = {
      title: {
        text: this.name
      },
      data: [
        {
          type: "line",
          dataPoints: this.dps
        }
      ]
    };

    return (
      <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
    );
  }
}

export default DynamicLiveLineChart;
