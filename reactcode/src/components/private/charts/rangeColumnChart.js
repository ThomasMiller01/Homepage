import React, { Component } from "react";
import CanvasJSReact from "../../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class RangeColumnChart extends Component {
  constructor(props) {
    super();
    this.options = props.options;

    if (this.options == null) {
      this.options = {
        theme: "dark2",
        exportEnabled: true,
        animationEnabled: true,
        title: {
          text: "Monthly Average Temperature Variation in Sydney",
        },
        axisX: {
          valueFormatString: "MMM YYYY",
        },
        axisY: {
          title: "Temperature (°C)",
          suffix: " °C",
        },
        data: [
          {
            type: "rangeColumn",
            indexLabel: "{y[#index]}°",
            xValueFormatString: "MMM YYYY",
            toolTipContent:
              "<strong>{x}</strong></br> Max: {y[1]} °C<br/> Min: {y[0]} °C",
            dataPoints: [
              { x: new Date("2017- 01- 01"), y: [19, 26] },
              { x: new Date("2017- 02- 01"), y: [19, 26] },
              { x: new Date("2017- 03- 01"), y: [18, 25] },
              { x: new Date("2017- 04- 01"), y: [15, 23] },
              { x: new Date("2017- 05- 01"), y: [12, 20] },
              { x: new Date("2017- 06- 01"), y: [10, 18] },
              { x: new Date("2017- 07- 01"), y: [8, 17] },
              { x: new Date("2017- 08- 01"), y: [9, 18] },
              { x: new Date("2017- 09- 01"), y: [12, 20] },
              { x: new Date("2017- 10- 01"), y: [14, 22] },
              { x: new Date("2017- 11- 01"), y: [16, 24] },
              { x: new Date("2017- 12- 01"), y: [18, 26] },
            ],
          },
        ],
      };
    }
  }

  render() {
    return (
      <div>
        <CanvasJSChart
          options={this.options}
          onRef={(ref) => (this.chart = ref)}
        />
      </div>
    );
  }
}

export default RangeColumnChart;
