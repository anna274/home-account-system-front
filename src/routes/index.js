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
} from 'containers';

function Routes() {
  return (
    <Router history={customHistory}>
      <Route path="/" component={Navigation} />
      <Route path={PATHS.login} exact component={Login} />
      <Route path={PATHS.register} exact component={Register} />
      <Route path={PATHS.register} exact component={Register} />
      <Route path={PATHS.accounts} exact component={AccountsPage} />
      <Route path={PATHS.categories} exact component={CategoriesPage} />
      <Switch>
      </Switch>
    </Router>
  );
}

export default Routes;
