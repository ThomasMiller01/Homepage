import React from "react";

import PieChart from "../../charts/pieChart";

const CpuStats = (props) => {
  let service = props.service;
  return (
    <div style={cpuStyle}>
      <PieChart options={getCpuOptions(service)} />
    </div>
  );
};

const getCpuOptions = (service) => {
  let cpus_percentage = service.stats.cpu.perCpuUsage.map((item) => {
    return Math.round((item / service.stats.cpu.systemCpuUsage) * 100);
  });

  let cpu_added_percentage = Math.round(
    (service.stats.cpu.totalUsage / service.stats.cpu.systemCpuUsage) * 100
  );

  let cpu_colors = ["#0077b6", "#00b4d8", "#90e0ef", "#C33C54"];

  let cpuDataPoints = [];
  for (let i = 0; i < cpus_percentage.length; i++) {
    cpuDataPoints.push({
      y: cpus_percentage[i],
      label: "CPU " + i,
      color: cpu_colors[i % cpu_colors.length],
    });
  }

  cpuDataPoints.push({
    y: 100 - cpu_added_percentage,
    label: "Available",
    color: cpu_colors[cpu_colors.length - 1],
  });

  const options = {
    height: 150,
    width: 150,
    animationEnabled: true,
    theme: "light1",
    backgroundColor: "",
    subtitles: [
      {
        text: cpu_added_percentage + "% CPU Usage",
        verticalAlign: "center",
        fontSize: 10,
        dockInsidePlotArea: true,
      },
    ],
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        indexLabel: "{label}: {y}%",
        indexLabelPlacement: "inside",
        dataPoints: cpuDataPoints,
      },
    ],
  };
  return options;
};

// Style
const cpuStyle = { padding: "10px" };

export default CpuStats;
