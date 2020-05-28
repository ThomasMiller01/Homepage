import React, { Component } from "react";
import CanvasJSReact from "../../../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
  constructor(props) {
    super();
    this.options = props.options;

    if (this.options == null) {
      this.options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
          text: "Website Traffic Sources",
        },
        data: [
          {
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
              { y: 18, label: "Direct" },
              { y: 49, label: "Organic Search" },
              { y: 9, label: "Paid Search" },
              { y: 5, label: "Referral" },
              { y: 19, label: "Social" },
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

export default PieChart;
