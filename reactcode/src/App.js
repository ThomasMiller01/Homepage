import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/public/content/home/home";
import Projects from "./components/public/content/projects/projects";
import AboutMe from "./components/public/content/aboutme/aboutme";
import Impressum from "./components/public/content/impressum/impressum";
import Private from "./components/private/private";
import Login from "./components/public/login";
import Error from "./components/error";

const Router = ({ history }) => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={AboutMe} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/login" component={Login} />
        <Route path="/private" component={Private} />
        <Route
          render={() => (
            <Error
              file="App.js"
              error_title="Bad Request"
              error_number="404"
              error_description="The server cannot process the request due to something that is perceived to be a client error."
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Router />
    </React.Fragment>
  );
};

export default App;
