import React, { Component, createRef } from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import PrivateEventsShow from "./private_events_show";
import AuthService from "../../authService";

import { getAllEvents } from "./eventDataQuery";
import { eventregistry_url } from "../../api_urls";
import { exampleEvents } from "./exampleEvents";

class PrivateEvents extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();

    this.eventregistryApi = new ApolloClient({
      cache: new InMemoryCache(),
      link: new createUploadLink({
        uri: eventregistry_url,
      }),
    });

    this.showEventsRef = createRef();
  }

  state = {
    events: exampleEvents,
    fetched: true,
  };

  // state = {
  //   events: [],
  //   fetched: false,
  // };

  // componentDidMount() {
  //   this.getEvents();
  // }

  getEvents = () => {
    this.eventregistryApi.cache.reset();
    // let token = this.Auth.getToken();
    this.eventregistryApi
      .query({
        query: getAllEvents,
        // variables: { token },
      })
      .then((result) => {
        let events = JSON.parse(JSON.stringify(result.data.getAllEvent));
        this.setState({ events });
        this.setState({ fetched: true });
        this.showEventsRef.current.updateEvents(events);
      });
  };

  render() {
    return (
      <div style={privateEventsShowStyle}>
        <title>Private Events</title>
        <PrivateEventsShow
          events={this.state.events}
          ref={this.showEventsRef}
        />
      </div>
    );
  }
}

// Styles
const privateEventsShowStyle = {
  width: "100%",
  minHeight: "93.5vh",
  backgroundColor: "rgb(230, 230, 230)",
  padding: "10px",
};

export default PrivateEvents;
