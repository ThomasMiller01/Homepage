import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import PrivateHome from "./private_home";
import PrivateProjects from "./private_projects";
import PrivateSettings from "./settings/private_settings";
import PrivateTimeLogger from "./timeLogger/private_timeLogger";
import Error from "../error";
import Header from "../public/header";
import PrivateHeader from "./private_header";
import Footer from "../public/footer";
import ProtectedRoute from "../ProtectedRoute";
import PrivateEditorTest from "./private_editor_test";

const Router = ({ history }) => {
  return (
    <Switch>
      <Redirect exact from="/private" to="/private/home" />
      <ProtectedRoute path="/private/home" component={PrivateHome} />
      <ProtectedRoute path="/private/projects" component={PrivateProjects} />
      <ProtectedRoute path="/private/settings" component={PrivateSettings} />
      <ProtectedRoute
        path="/private/editortest"
        component={PrivateEditorTest}
      />
      <ProtectedRoute
        path="/private/timelogger"
        component={PrivateTimeLogger}
      />
      <Route
        render={() => (
          <Error
            file="Private.js"
            error_title="Bad Request"
            error_number="404"
            error_description="The server cannot process the request due to something that is perceived to be a client error."
          />
        )}
      />
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
