import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes';
import NavigationItem from 'components/ControlPanel/Navigation/NavigationItem';

function Dashboard() {
  return (
    <NavigationItem>
      <NavLink to={AppRoutes.DASHBOARD} exact activeClassName='active'>
        Dashboard
      </NavLink>
    </NavigationItem>
  );
}

export default withRouter(Dashboard);
