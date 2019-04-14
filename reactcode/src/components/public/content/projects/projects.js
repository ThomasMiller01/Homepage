import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import AllProjects from "./allprojects";
import Project from "./project";
import Header from "../../header";
import Footer from "../../footer";

import Error from "../../../error";

const Projects = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Redirect exact from="/projects" to="/projects/all" />
        <Route path="/projects/all" component={AllProjects} />
        <Route path="/projects/project" component={Project} />
        <Route render={() => <Error file="Projects.js" />} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default Projects;
