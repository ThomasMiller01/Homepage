import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import PrivateHome from "./private_home";
import PrivateProjects from "./private_projects";
import PrivateSettings from "./settings/private_settings";
import Error from "../error";
import Header from "../public/header";
import PrivateHeader from "./private_header";
import Footer from "../public/footer";

const Router = ({ history }) => {
  return (
    <Switch>
      <Redirect exact from="/private" to="/private/home" />
      <Route path="/private/home" component={PrivateHome} />
      <Route path="/private/projects" component={PrivateProjects} />
      <Route path="/private/settings" component={PrivateSettings} />
      <Route render={() => <Error file="Private.js" />} />
    </Switch>
  );
};

const Private = () => {
  return (
    <React.Fragment>
      <Header />
      <PrivateHeader />
      <Router />
      <Footer />
    </React.Fragment>
  );
};

export default Private;
