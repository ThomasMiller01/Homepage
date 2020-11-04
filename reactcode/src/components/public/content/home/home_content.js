import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { gql } from "apollo-boost";

import { homepage_url } from "../../../api_urls";

class HomeContent extends Component {
  constructor() {
    super();
    this.homepageApi = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: homepage_url,
      }),
    });
  }

  state = {
    favProjects: [],
  };

  componentDidMount = () => {
    this.homepageApi
      .query({
        query: gql`
          query {
            getPublicProjects {
              id
              name
              description
              images {
                thumbnail {
                  url
                }
              }
              favourite
              position
            }
          }
        `,
      })
      .then((result) => {
        let data = JSON.parse(JSON.stringify(result.data.getPublicProjects));
        data.sort(function (a, b) {
          return a.position > b.position ? 1 : b.position > a.position ? -1 : 0;
        });
        var favProjects = [];
        var i = 1;
        data.forEach(function (project) {
          if (project.favourite) {
            project = Object.assign(
              { _class: "favProjects favProjects-item" + i.toString() },
              project
            );
            if (i === 3) {
              i = 0;
            } else {
              i++;
            }
            favProjects.push(project);
          }
        });
        this.setState({ favProjects: favProjects });
      });
  };

  render() {
    return (
      <div style={contentDiv}>
        {this.state.favProjects.map((project) => (
          <div
            key={project.id}
            style={{
              backgroundImage: "url(" + project.images.thumbnail.url + ")",
              minHeight: "350px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
              color: "white",
              backgroundColor: "rgb(83, 83, 83)",
              display: "inline-table",
            }}
            className={project._class}
          >
            <div className="container" style={favProjectsContainerStyle}>
              <h1 className="display-4" style={favProjectsH1Style}>
                {project.name}
              </h1>
              <p
                className="lead"
                dangerouslySetInnerHTML={{
                  __html: project.description,
                }}
              />
              <NavLink
                to={{
                  pathname: "/projects/" + project.name,
                }}
                className="btn btn-outline-primary"
                style={seemoreBtnStyle}
              >
                See more
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

// Styles

const contentDiv = {
  width: "100%",
};

const seemoreBtnStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.200)",
  color: "white",
  borderColor: "white",
  margin: "15px",
};

const favProjectsContainerStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.527)",
  padding: "5px",
  margin: "20px auto 0 auto",
  width: "95%",
};

const favProjectsH1Style = {
  fontSize: "39px",
};

export default HomeContent;
