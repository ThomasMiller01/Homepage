import React, { Component, createRef } from "react";

import Draw from "./event_engine/draw";
import DrawTimeline from "./event_engine/timeline";
import DrawControlls from "./event_engine/controlls";

class PrivateEventsShow extends Component {
  constructor(props) {
    super();
    this.state.events = props.events;

    this.intervall = 60;
    this.intervall_type = "s";
    this.border_bottom_intervall = 5;

    this.intervall_division = {
      ms: 1,
      s: 1000,
      m: 1000 * 60,
      h: 1000 * 60 * 60,
      d: 1000 * 60 * 60 * 24,
    };

    this.DrawRef = createRef();
    this.ControllsRef = createRef();
  }

  updateEvents = (events) => {
    this.setState({ events });
    this.init();
  };

  state = {
    events: [],
    grid: {
      data: [],
      start: null,
      end: null,
    },
    timelines: {
      left: [],
      bottom: [],
    },
    legend: {},
  };

  componentDidMount() {
    this.init();
  }

  init = () => {
    // set start and end of time to display
    let start = new Date("2020-10-18 14:17+00:00");
    let end = new Date();
    end.setTime(
      start.getTime() +
        this.intervall * this.intervall_division[this.intervall_type]
    );
    this.ControllsRef.current.updateIntervall({
      value: this.intervall,
      type: this.intervall_type,
    });
    this.ControllsRef.current.updateTime({ start, end });

    this.setCurrentGrid(start, end);
  };

  setNewIntervall = (intervall) => {
    this.intervall = intervall;
    let start = new Date("2020-10-18 14:17+00:00");
    let end = new Date();
    end.setTime(
      start.getTime() +
        this.intervall * this.intervall_division[this.intervall_type]
    );
    this.ControllsRef.current.updateTime({ start, end });
    this.setCurrentGrid(start, end);
  };

  setNewIntervallType = (type) => {
    this.intervall_type = type;
    let start = new Date("2020-10-18 14:17+00:00");
    let end = new Date();
    end.setTime(
      start.getTime() +
        this.intervall * this.intervall_division[this.intervall_type]
    );
    this.ControllsRef.current.updateTime({ start, end });
    this.setCurrentGrid(start, end);
  };

  setCurrentGrid = (start, end) => {
    // get events to display as init
    let eventsInit = this.getEventBetweenTime(start, end);

    // get event_types of events to display
    let event_type_list = this.getEventTypes(eventsInit);

    let curr_intervall_division = this.intervall_division[this.intervall_type];

    let timeIntervalls =
      (end - start) / this.intervall_division[this.intervall_type];

    let grid = [];
    if (event_type_list.length === 0) {
      grid.push([]);
      for (let y = 0; y < timeIntervalls; y++) {
        grid[0].push({ content: null, color: "transparent" });
      }
    } else {
      for (let x = 0; x < event_type_list.length; x++) {
        grid.push([]);
        for (let y = 0; y < timeIntervalls; y++) {
          let events = this.getEventsOfTimestamp(
            event_type_list[x].events,
            new Date(
              new Date().setTime(start.getTime() + y * curr_intervall_division)
            )
          );
          let content = "";
          let color = "transparent";
          if (events.length !== 0) {
            events.forEach((event) => {
              content += "[" + event.received.id + ", " + event.sent.id + "]";
            });
            color = "var(--c1)";
          }
          grid[x].push({ content, color: color });
        }
      }
    }

    let timelines = {
      left: [],
      bottom: [],
    };
    let legend = {};
    for (let i = 0; i < event_type_list.length; i++) {
      timelines.left.push(event_type_list[i].event_type.id);
      legend[event_type_list[i].event_type.id] =
        event_type_list[i].event_type.name;
    }
    for (let i = 0; i < timeIntervalls; i++) {
      let time_tmp = new Date();
      time_tmp.setTime(start.getTime() + i * curr_intervall_division);
      let time = this.formatDate(time_tmp);
      if (i % this.border_bottom_intervall === 0) {
        timelines.bottom.push("^_" + time);
      } else {
        timelines.bottom.push("");
      }
    }

    this.DrawRef.current.updateGrid(grid, timelines);
    this.ControllsRef.current.updateLegend(legend);

    this.setState({
      grid: {
        data: grid,
        start,
        end,
      },
      timelines: timelines,
      legend,
    });
  };

  getEventsOfTimestamp = (events, timestamp) => {
    let all_events = [];
    let converted_timestamp = this.getConvertedTimestamp(timestamp);
    events.forEach((event) => {
      if (
        converted_timestamp >=
          this.getConvertedTimestamp(new Date(event.received.timestamp)) &&
        converted_timestamp <=
          this.getConvertedTimestamp(new Date(event.sent.timestamp))
      ) {
        all_events.push(event);
      }
    });
    return all_events;
  };

  getConvertedTimestamp = (timestamp) => {
    switch (this.intervall_type) {
      case "ms":
        return timestamp;
      case "s":
        timestamp.setMilliseconds(0);
        return timestamp;
      case "m":
        timestamp.setMilliseconds(0);
        timestamp.setSeconds(0);
        return timestamp;
      case "h":
        timestamp.setMilliseconds(0);
        timestamp.setSeconds(0);
        timestamp.setMinutes(0);
        return timestamp;
      case "d":
        timestamp.setMilliseconds(0);
        timestamp.setSeconds(0);
        timestamp.setMinutes(0);
        timestamp.setHours(0);
        return timestamp;
      default:
        return timestamp;
    }
  };

  getEventBetweenTime = (start, end) => {
    let events = [];
    this.state.events.forEach((event) => {
      if (
        new Date(event.received.timestamp) > start &&
        new Date(event.sent.timestamp) < end
      )
        events.push(event);
    });
    return events;
  };

  getEventTypes = (events) => {
    let event_types = {};
    events.forEach((event) => {
      if (event.event_type.id in event_types) {
        event_types[event.event_type.id].events.push({
          received: event.received,
          sent: event.sent,
        });
      } else {
        event_types[event.event_type.id] = {
          event_type: event.event_type,
          events: [{ received: event.received, sent: event.sent }],
        };
      }
    });
    return Object.values(event_types);
  };

  render() {
    return (
      <div style={divStyle}>
        <DrawControlls
          intervall_types={this.intervall_division}
          newIntervall={this.setNewIntervall}
          newIntervallType={this.setNewIntervallType}
          ref={this.ControllsRef}
        />
        <Draw ref={this.DrawRef} />
        <DrawTimeline />
      </div>
    );
  }

  formatDate = (date) => {
    switch (this.intervall_type) {
      case "ms":
        return date.getSeconds() + "." + date.getMilliseconds() + "s";
      case "s":
        return date.getMinutes() + "m:" + date.getSeconds() + "s";
      case "m":
        return date.getHours() + ":" + date.getMinutes();
      case "h":
        return date.getDate() + "_" + date.getHours() + "h";
      case "d":
        return date.getDate() + "-" + date.getMonth();
      default:
        return (
          date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
        );
    }
  };
}

// Styles
const divStyle = {
  margin: "20px",
};

export default PrivateEventsShow;
