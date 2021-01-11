import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import NavigationItem from 'components/ControlPanel/Navigation/NavigationItem';
import NavigationSubList from 'components/ControlPanel/Navigation/NavigationSubList';
import NavigationSubItem from 'components/ControlPanel/Navigation/NavigationSubItem';

const Products = () => (
  <NavigationItem>
    <NavLink
      to={AppRoutes.PRODUCTS.PRODUCTS}
      activeClassName='submenu-active'
      className='navigation-item-link navigation-item-link--products'>
      Products
    </NavLink>
    <NavigationSubList>
      <NavigationSubItem>
        <NavLink to={AppRoutes.PRODUCTS.INVENTORY} activeClassName='active'>
          Inventory
        </NavLink>
      </NavigationSubItem>
      <NavigationSubItem>
        <NavLink to={AppRoutes.PRODUCTS.TRANSFERS} activeClassName='active'>
          Transfers
        </NavLink>
      </NavigationSubItem>
      <NavigationSubItem>
        <NavLink to={AppRoutes.PRODUCTS.DISCOUNTS} activeClassName='active'>
          Discounts
        </NavLink>
      </NavigationSubItem>
    </NavigationSubList>
  </NavigationItem>
);

export default withRouter(Products);
