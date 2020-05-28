import React from "react";

import CpuStats from "./cpuStats";
import MemoryStats from "./memoryStats";
import DiskStats from "./diskStats";
import NetworkStats from "./networkStats";

const PrivateServiceStats = (props) => {
  let service = props.service;
  return (
    <div style={statsDiv}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <CpuStats service={service} />
          </div>
          <div className="col-md-6 col-sm-12">
            <MemoryStats service={service} />
          </div>
          <div className="col-md-6 col-sm-12">
            <DiskStats service={service} />
          </div>
          <div className="col-md-6 col-sm-12">
            <NetworkStats service={service} />
          </div>
        </div>
        <small>{renderDate(service.stats.read)}</small>
      </div>
    </div>
  );
};

const renderDate = (date) => {
  let datetime = new Date(date);
  return datetime
    .toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .replace(",", "");
};

// Style
const statsDiv = {
  // background: "#CCDBDC",
  padding: "15px",
  margin: "10px",
  borderRadius: "5px",
};

export default PrivateServiceStats;
