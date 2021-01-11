import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import Inventory from 'containers/Pages/Products/Inventory';
import Transfers from 'containers/Pages/Products/Transfers';
import Discounts from 'containers/Pages/Products/Discounts';

const Products = () => (
  <Switch>
    <Route exact path={AppRoutes.PRODUCTS.PRODUCTS}>
      <Redirect to={AppRoutes.PRODUCTS.INVENTORY} />
    </Route>
    <Route exact path={AppRoutes.PRODUCTS.INVENTORY}>
      <Inventory />
    </Route>
    <Route exact path={AppRoutes.PRODUCTS.TRANSFERS}>
      <Transfers />
    </Route>
    <Route exact path={AppRoutes.PRODUCTS.DISCOUNTS}>
      <Discounts />
    </Route>
  </Switch>
);

export default Products;
