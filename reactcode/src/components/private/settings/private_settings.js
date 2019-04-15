import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateSettingsHome from "./private_settings_home";
import PrivateSettingsChangeProjectContent from "./private_settings_changeProjectContent";
import Error from "../../error";

const Router = ({ history }) => {
  return (
    <Switch>
      <Route exact path="/private/settings" component={PrivateSettingsHome} />
      <Route
        path="/private/settings/changeProject"
        component={PrivateSettingsChangeProjectContent}
      />
      <Route render={() => <Error file="PrivateSettings.js" />} />
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
