import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateTimeLoggerHome from "./private_timeLogger_home";
import Error from "../../error";

const Router = ({ history }) => {
  return (
    <Switch>
      <Route
        exact
        path="/private/timelogger"
        component={PrivateTimeLoggerHome}
      />
      <Route
        render={() => (
          <Error
            file="PrivateTimeLogger.js"
            error_title="Bad Request"
            error_number="404"
            error_description="The server cannot process the request due to something that is perceived to be a client error."
          />
        )}
      />
    </Switch>
  );
};

const PrivateSettings = () => {
  return (
    <React.Fragment>
      <Router />
    </React.Fragment>
  );
};

export default PrivateSettings;
