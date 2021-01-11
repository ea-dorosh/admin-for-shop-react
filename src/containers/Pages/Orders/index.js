import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import AllOrders from 'containers/Pages/Orders/AllOrders';
import Order from 'containers/Pages/Orders/Order';

const Orders = () => (
  <Switch>
    <Route exact path={AppRoutes.ORDERS.ORDERS}>
      <Redirect to={AppRoutes.ORDERS.ALL_ORDERS} />
    </Route>
    <Route exact path={AppRoutes.ORDERS.ALL_ORDERS}>
      <AllOrders />
    </Route>
    <Route path='/orders/:id'>
      <Order />
    </Route>
  </Switch>
);

export default Orders;
