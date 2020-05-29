import React from "react";

import RangeColumnChart from "../../charts/rangeColumnChart";

const DiskStats = (props) => {
  let service = props.service;
  return (
    <div style={diskStyle}>
      <RangeColumnChart options={getDiskOptions(service)} />
    </div>
  );
};

const getDiskOptions = (service) => {
  let readkB = Math.round((service.stats.io.read_value / 1048576) * 100) / 100;
  let writekB =
    Math.round((service.stats.io.write_value / 1048576) * 100) / 100;

  let options = {
    height: 150,
    width: 150,
    theme: "light1",
    backgroundColor: "",
    animationEnabled: true,
    title: {
      text: "Disk",
      fontSize: 12,
    },
    axisY: {
      gridThickness: 0,
    },
    axisY2: {
      gridThickness: 0,
    },
    dataPointWidth: 20,
    data: [
      {
        type: "rangeColumn",
        indexLabel: "{y[#index]} kB/s",
        xValueFormatString: "MMM YYYY",
        toolTipContent:
          "<strong>{label}</strong></br> Max: {y[0]} kB/s<br/> Min: {y[1]} kB/s",
        axisYIndex: 0,
        dataPoints: [
          {
            label: "read",
            y: [service.stats.io.read_major, service.stats.io.read_minor],
            color: "#1560A5",
          },
          {
            label: "write",
            y: [service.stats.io.write_major, service.stats.io.write_minor],
            color: "#C33C54",
          },
        ],
      },
      {
        type: "scatter",
        markerSize: 10,
        toolTipContent: "{y} kB",
        color: "#00C2BF",
        axisYIndex: 1,
        axisYType: "secondary",
        dataPoints: [
          { label: "read", y: readkB },
          { label: "write", y: writekB },
        ],
      },
    ],
  };
  return options;
};

// Style
const diskStyle = { padding: "10px" };

export default DiskStats;
