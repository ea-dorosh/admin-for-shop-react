import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import NavigationItem from 'components/ControlPanel/Navigation/NavigationItem';
import NavigationSubList from 'components/ControlPanel/Navigation/NavigationSubList';
import NavigationSubItem from 'components/ControlPanel/Navigation/NavigationSubItem';

const Orders = () => (
  <NavigationItem>
    <NavLink
      to={AppRoutes.ORDERS.ORDERS}
      activeClassName='submenu-active'
      className='navigation-item-link navigation-item-link--orders'>
      Orders
    </NavLink>
    <NavigationSubList>
      <NavigationSubItem>
        <NavLink to={AppRoutes.ORDERS.ALL_ORDERS} activeClassName='active'>
          All Orders
        </NavLink>
      </NavigationSubItem>
    </NavigationSubList>
  </NavigationItem>
);

export default withRouter(Orders);
