import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import NavigationItem from 'components/ControlPanel/Navigation/NavigationItem';

const Dashboard = () => (
  <NavigationItem>
    <NavLink
      to={AppRoutes.DASHBOARD}
      exact
      activeClassName='active'
      className='navigation-item-link navigation-item-link--dashboard'>
      Dashboard
    </NavLink>
  </NavigationItem>
);

export default withRouter(Dashboard);
