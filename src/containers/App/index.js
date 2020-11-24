import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import './index.scss'
import Dashboard from 'containers/Pages/Dashboard';
import AllOrders from 'containers/Pages/Orders/AllOrders';
import Order from 'containers/Pages/Orders/Order';


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoutes.DASHBOARD}>
            <Dashboard/>
          </Route>
          <Route exact path={AppRoutes.ALL_ORDERS.MAIN}>
              <AllOrders/>
          </Route>
          <Route path='/orders/:id'>
            <Order/>
          </Route>
        </Switch>
      </BrowserRouter>

  );
}

export default App;
