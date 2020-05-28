import React from "react";

import StackedColumnChart from "../../charts/stackedColumnChart";

const NetworkStats = (props) => {
  let service = props.service;
  return (
    <div style={networkStyle}>
      <StackedColumnChart options={getNetworkOptions(service)} />
    </div>
  );
};

const getNetworkOptions = (service) => {
  let receivedKB =
    Math.round((service.stats.network.rx_bytes / 1048576) * 100) / 100;
  let receivedPackets = service.stats.network.rx_packets;
  let receivedErrors = service.stats.network.rx_errors;
  let receivedDropped = service.stats.network.rx_dropped;
  let transmittedKB =
    Math.round((service.stats.network.tx_bytes / 1048576) * 100) / 100;
  let transmittedPackets = service.stats.network.tx_packets;
  let transmittedErrors = service.stats.network.tx_errors;
  let transmittedDropped = service.stats.network.tx_dropped;

  let options = {
    height: 150,
    animationEnabled: true,
    title: {
      text: "Network",
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
    axisY2: {
      gridThickness: 0,
    },
    axisX: {
      interval: 1,
    },
    data: [
      {
        type: "column",
        name: "Data",
        showInLegend: true,
        color: "#1560A5",
        indexLabel: "{y} kB",
        axisYIndex: 0,
        dataPoints: [
          {
            label: "down",
            y: receivedKB,
          },
          {
            label: "up",
            y: transmittedKB,
          },
          {
            label: "down",
            y: 0,
          },
          {
            label: "up",
            y: 0,
          },
        ],
      },
      {
        type: "stackedColumn",
        name: "Packets",
        showInLegend: true,
        color: "#C33C54",
        indexLabel: "{y}",
        axisYIndex: 1,
        axisYType: "secondary",
        dataPoints: [
          {
            label: "down",
            y: 0,
          },
          {
            label: "up",
            y: 0,
          },
          {
            label: "down",
            y: receivedPackets,
          },
          {
            label: "up",
            y: transmittedPackets,
          },
        ],
      },
      {
        type: "stackedColumn",
        name: "Errors",
        showInLegend: true,
        color: "#00C2BF",
        indexLabel: "{y}",
        axisYIndex: 1,
        axisYType: "secondary",
        dataPoints: [
          {
            label: "down",
            y: 0,
          },
          {
            label: "up",
            y: 0,
          },
          {
            label: "down",
            y: receivedErrors,
          },
          {
            label: "up",
            y: transmittedErrors,
          },
        ],
      },
      {
        type: "stackedColumn",
        name: "Dropped",
        showInLegend: true,
        color: "#8CDEDC",
        indexLabel: "{y}",
        axisYIndex: 1,
        axisYType: "secondary",
        dataPoints: [
          {
            label: "down",
            y: 0,
          },
          {
            label: "up",
            y: 0,
          },
          {
            label: "down",
            y: receivedDropped,
          },
          {
            label: "up",
            y: transmittedDropped,
          },
        ],
      },
    ],
  };
  return options;
};

// Style
const networkStyle = { padding: "10px" };

export default NetworkStats;
