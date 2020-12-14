import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import './index.scss';
import Dashboard from 'containers/Pages/Dashboard';
import AllOrders from 'containers/Pages/Orders/AllOrders';
import Order from 'containers/Pages/Orders/Order';
import Popups from 'containers/Popups';
import HeaderContainer from 'containers/ControlPanel/Header';
import Navigation from 'containers/ControlPanel/Navigation';
import Page from 'components/ControlPanel/Page';
import AllCustomers from 'containers/Pages/Customers/AllCustomers';

function App() {
  return (
    <BrowserRouter>
      <Page>
        <HeaderContainer />
        <Navigation />
        <Switch>
          <Route exact path={AppRoutes.DASHBOARD}>
            <Dashboard />
          </Route>
          <Route exact path={AppRoutes.ORDERS.ORDERS}>
            <Redirect to={AppRoutes.ORDERS.ALL_ORDERS} />
          </Route>
          <Route exact path={AppRoutes.ORDERS.ALL_ORDERS}>
            <AllOrders />
          </Route>
          <Route path='/orders/:id'>
            <Order />
          </Route>
          <Route exact path={AppRoutes.CUSTOMERS.ALL_CUSTOMERS}>
            <AllCustomers />
          </Route>
        </Switch>
        <Popups />
      </Page>
    </BrowserRouter>
  );
}

export default App;
