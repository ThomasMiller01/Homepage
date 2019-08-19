import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../authService";

import "./privateProjects.scss";

class PrivateProjects extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = {
    projects: []
  };

  componentDidMount = () => {
    const headers = {
      Authorization: "Bearer " + this.Auth.getToken(),
      "Content-Type": "application/json"
    };
    fetch("http://v220190810228695422.bestsrv.de/api/Projects/getAll", {
      headers
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ projects: data });
      });
  };

  getPrivateIconIndicator = _private => {
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
            {this.state.projects.map(project => (
              <div
                key={project._id}
                className="card my-3"
                style={projectCardStyle}
              >
                <img
                  src={project._thumbnail}
                  className="card-img-top"
                  alt="Loading ..."
                />
                <div className="card-body">
                  <h4 className="card-title">
                    {project._name}{" "}
                    {this.getPrivateIconIndicator(project._private)}
                  </h4>

                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{
                      __html: project._description
                    }}
                  />
                  <NavLink
                    to={{
                      pathname: "/projects/project",
                      query: {
                        project: project
                      }
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
  padding: "15px 0 20px 0"
};

const projectsContainerStyle = { padding: "0 10px 0 10px" };

const projectCardStyle = { minWidth: "250px", border: "none" };

export default PrivateProjects;
