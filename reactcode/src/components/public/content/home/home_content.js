import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HomeContent extends Component {
  state = {
    favProjects: []
  };

  componentDidMount = () => {
    fetch("https://millerinfo.de/services/homepage/api/Projects/getpublic")
      .then(results => {
        return results.json();
      })
      .then(data => {
        var favProjects = [];
        var i = 1;
        data.forEach(function(project) {
          if (project._favourite) {
            project["_class"] = "favProjects favProjects-item" + i.toString();
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
        {this.state.favProjects.map(project => (
          <div
            key={project._id}
            style={{
              backgroundImage: "url(" + project._thumbnail + ")",
              minHeight: "350px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto 100%",
              color: "white",
              backgroundColor: "rgb(83, 83, 83)",
              display: "inline-table"
            }}
            className={project._class}
          >
            <div className="container" style={favProjectsContainerStyle}>
              <h1 className="display-4" style={favProjectsH1Style}>
                {project._name}
              </h1>
              <p
                className="lead"
                dangerouslySetInnerHTML={{
                  __html: project._description
                }}
              />
              <NavLink
                to={{
                  pathname: "/projects/" + project._name
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
  width: "100%"
};

const seemoreBtnStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.200)",
  color: "white",
  borderColor: "white",
  margin: "15px"
};

const favProjectsContainerStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.527)",
  padding: "5px",
  margin: "20px auto 0 auto",
  width: "95%"
};

const favProjectsH1Style = {
  fontSize: "39px"
};

export default HomeContent;
