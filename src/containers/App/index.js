import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import './index.scss';
import Dashboard from 'containers/Pages/Dashboard';
import AllOrders from 'containers/Pages/Orders/AllOrders';
import Order from 'containers/Pages/Orders/Order';
import Popups from 'containers/Popups';
import HeaderContainer from 'containers/ControlPanel/Header';
import Navigation from 'components/ControlPanel/Navigation';
import Page from 'components/ControlPanel/Page';

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
          <Route exact path={AppRoutes.ALL_ORDERS.MAIN}>
            <AllOrders />
          </Route>
          <Route path='/orders/:id'>
            <Order />
          </Route>
        </Switch>
        <Popups />
      </Page>
    </BrowserRouter>
  );
}

export default App;
