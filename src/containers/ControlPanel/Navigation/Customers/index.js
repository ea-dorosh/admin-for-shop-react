import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import NavigationItem from 'components/ControlPanel/Navigation/NavigationItem';
import NavigationSubList from 'components/ControlPanel/Navigation/NavigationSubList';
import NavigationSubItem from 'components/ControlPanel/Navigation/NavigationSubItem';

function Customers() {
  return (
    <NavigationItem>
      <NavLink to={AppRoutes.CUSTOMERS.ALL_CUSTOMERS} activeClassName='submenu-active'>
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
}

export default withRouter(Customers);
