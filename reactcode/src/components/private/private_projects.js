import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../authService";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { gql } from "apollo-boost";

import "./privateProjects.scss";

class PrivateProjects extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.homepageApi = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: "https://api.thomasmiller.info/homepage",
      }),
    });
  }

  state = {
    projects: [],
  };

  componentDidMount = () => {
    let token = this.Auth.getToken();
    this.homepageApi
      .query({
        query: gql`
          query($token: String!) {
            getAllProjects(token: $token) {
              id
              name
              description
              images {
                thumbnail {
                  url
                }
              }
              _private
            }
          }
        `,
        variables: { token },
      })
      .then((result) => {
        this.setState({ projects: result.data.getAllProjects });
      });
  };

  getPrivateIconIndicator = (_private) => {
    if (_private) {
      return <i class="fas fa-lock" />;
    } else {
      return <i class="fas fa-book" />;
    }
  };

  render() {
    return (
      <div style={allProjectsStyle} className="all-projects">
        <div style={projectsContainerStyle} className="projectsContainer">
          <div className="card-deck">
            {this.state.projects.map((project) => (
              <div
                key={project.id}
                className="card my-3"
                style={projectCardStyle}
              >
                <img
                  src={project.images.thumbnail.url}
                  className="card-img-top"
                  alt="Loading ..."
                />
                <div className="card-body">
                  <h4 className="card-title">
                    {project.name}{" "}
                    {this.getPrivateIconIndicator(project._private)}
                  </h4>

                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{
                      __html: project.description,
                    }}
                  />
                  <NavLink
                    to={{
                      pathname: "/projects/" + project.name,
                    }}
                    className="btn btn-outline-primary"
                  >
                    See more
                  </NavLink>
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const allProjectsStyle = {
  width: "100%",
  minHeight: "87vh",
  backgroundColor: "#242424",
  backgroundImage: "url('/images/all_projects_back.png')",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundPosition: "center",
  backgroundSize: "cover",
  padding: "15px 0 20px 0",
};

const projectsContainerStyle = { padding: "0 10px 0 10px" };

const projectCardStyle = { minWidth: "250px", border: "none" };

export default PrivateProjects;
