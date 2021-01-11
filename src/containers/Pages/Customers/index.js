import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import AllCustomers from 'containers/Pages/Customers/AllCustomers';

const Customers = () => (
  <Switch>
    <Route exact path={AppRoutes.CUSTOMERS.CUSTOMERS}>
      <Redirect to={AppRoutes.CUSTOMERS.ALL_CUSTOMERS} />
    </Route>
    <Route exact path={AppRoutes.CUSTOMERS.ALL_CUSTOMERS}>
      <AllCustomers />
    </Route>
  </Switch>
);

export default Customers;
