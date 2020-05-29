import React from "react";

import StackedColumnChart from "../../charts/stackedColumnChart";

const MemoryStats = (props) => {
  let service = props.service;
  return (
    <div style={memoryStyle}>
      <StackedColumnChart options={getMemoryOptions(service)} />
    </div>
  );
};

const getMemoryOptions = (service) => {
  let memoryUsageMb =
    Math.round((service.stats.memory.usage / 1048576) * 100) / 100;
  let memoryUsageMbLimit =
    Math.round((service.stats.memory.limit / 1048576) * 100) / 100;
  let memoryUsagePercentage = Math.round(
    (service.stats.memory.usage / service.stats.memory.limit) * 100
  );

  let options = {
    height: 150,
    width: 150,
    animationEnabled: true,
    title: {
      text: "Memory",
      fontSize: 12,
    },
    backgroundColor: "",
    legend: {
      verticalAlign: "center",
      horizontalAlign: "right",
      reversed: true,
      fontSize: 10,
    },
    toolTip: {
      shared: true,
    },
    axisY: {
      gridThickness: 0,
    },
    axisX: {
      labelFormatter: () => {
        return "";
      },
    },
    dataPointWidth: 100,
    data: [
      {
        type: "stackedColumn100",
        name: "Usage",
        showInLegend: true,
        color: "#1560A5",
        indexLabel: "{name} ({percentage})",
        indexLabelPlacement: "inside",
        indexLabelFontSize: 8,
        legendText: "{name} ({y}mb)",
        dataPoints: [
          {
            label: "Memory Usage",
            y: memoryUsageMb,
            percentage: memoryUsagePercentage + "%",
          },
        ],
      },
      {
        type: "stackedColumn100",
        name: "Limit",
        showInLegend: true,
        color: "#C33C54",
        indexLabel: "{name} ({percentage})",
        indexLabelPlacement: "inside",
        legendText: "{name} (" + memoryUsageMbLimit + "mb)",
        indexLabelFontSize: 8,
        dataPoints: [
          {
            label: "Memory Usage",
            y: memoryUsageMbLimit - memoryUsageMb,
            percentage: 100 - memoryUsagePercentage + "%",
          },
        ],
      },
    ],
  };
  return options;
};

// Style
const memoryStyle = { padding: "10px" };

export default MemoryStats;
