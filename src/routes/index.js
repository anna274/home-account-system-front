import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'routes/privateRoute';
import customHistory from 'customHistory';
import { PATHS } from 'consts';
import {
  Login,
  Register,
  Navigation,
  AccountsPage,
  CategoriesPage,
  SettingsPage,
  AccountMembersPage
} from 'containers';

function Routes() {
  return (
    <Router history={customHistory}>
      <Route path={PATHS.register} exact component={Register} />
      <Route path={PATHS.login} exact component={Login} />
      <Route path="/" component={Navigation} />
      <Switch>
        <PrivateRoute path={PATHS.accounts} exact component={AccountsPage} />
        <PrivateRoute path={PATHS.categories} exact component={CategoriesPage} />
        <PrivateRoute path={PATHS.settings} exact component={SettingsPage} />
        <PrivateRoute path={PATHS.members} exact component={AccountMembersPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
