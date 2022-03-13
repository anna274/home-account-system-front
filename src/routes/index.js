import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'routes/privateRoute';
import customHistory from 'customHistory';
import { PATHS } from 'consts';
import {
  Login,
  Register,
  Logout,
  Navigation,
  AccountsPage,
  CategoriesPage,
  SettingsPage,
  AccountMembersPage,
  BankAccountsPage,
  IncomesPage,
  ExpensesPage,
  StatisticsPage,
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
        <PrivateRoute path={PATHS.bankAccounts} exact component={BankAccountsPage} />
        <PrivateRoute path={PATHS.incomes} exact component={IncomesPage} />
        <PrivateRoute path={PATHS.expenses} exact component={ExpensesPage} />
        <PrivateRoute path={PATHS.statistics} exact component={StatisticsPage} />
        <PrivateRoute path={PATHS.logout} exact component={Logout} />
      </Switch>
    </Router>
  );
}

export default Routes;
