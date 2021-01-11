import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import NavigationItem from 'components/ControlPanel/Navigation/NavigationItem';
import NavigationSubList from 'components/ControlPanel/Navigation/NavigationSubList';
import NavigationSubItem from 'components/ControlPanel/Navigation/NavigationSubItem';

const Customers = () => (
  <NavigationItem>
    <NavLink
      to={AppRoutes.CUSTOMERS.CUSTOMERS}
      activeClassName='submenu-active'
      className='navigation-item-link navigation-item-link--customers'>
      Customers
    </NavLink>
    <NavigationSubList>
      <NavigationSubItem>
        <NavLink to={AppRoutes.CUSTOMERS.ALL_CUSTOMERS} activeClassName='active'>
          All Customers
        </NavLink>
      </NavigationSubItem>
    </NavigationSubList>
  </NavigationItem>
);

export default withRouter(Customers);
