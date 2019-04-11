import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Private from "./components/private/private";
import Login from "./components/public/login";
import Error from "./components/error";

import Home from "./components/public/content/home/home";
import Projects from "./components/public/content/projects/projects";
import AboutMe from "./components/public/content/aboutme/aboutme";
import Impressum from "./components/public/content/impressum/impressum";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/impressum" component={Impressum} />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/private" component={Private} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

class App extends Component {
  render() {
    return <Routes />;
  }
}

export default App;
