import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import './index.scss';
import Dashboard from 'containers/Pages/Dashboard';
import Popups from 'containers/Popups';
import HeaderContainer from 'containers/ControlPanel/Header';
import Navigation from 'containers/ControlPanel/Navigation';
import Page from 'components/ControlPanel/Page';
import Orders from 'containers/Pages/Orders';
import Products from 'containers/Pages/Products';
import Customers from 'containers/Pages/Customers';

const App = () => {
  return (
    <BrowserRouter>
      <Page>
        <HeaderContainer />
        <Navigation />
        <Switch>
          <Route exact path={AppRoutes.DASHBOARD}>
            <Dashboard />
          </Route>
        </Switch>
        <Orders />
        <Products />
        <Customers />

        <Popups />
      </Page>
    </BrowserRouter>
  );
};

export default App;
