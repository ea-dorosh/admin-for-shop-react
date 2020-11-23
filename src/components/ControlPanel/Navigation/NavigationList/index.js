import React from "react";
import {Link, withRouter} from 'react-router-dom';
import "./index.scss"
import NavigationSubList from "components/ControlPanel/Navigation/NavigationSubList";
import {AppRoutes} from "constants/app_routes";


function NavigationList() {
  return (
      <ul className={'navigation-list'}>
        <li className={'navigation-list__item navigation-list__item--active'}>
          <Link to={AppRoutes.DASHBOARD} className='navigation-list__item-link navigation-list__item-link--active'>
            Dashboard
          </Link>
        </li>
        <li className={'navigation-list__item'}>
          Orders
          <NavigationSubList/>
        </li>
        <li className={'navigation-list__item'}>Products</li>
        <li className={'navigation-list__item'}>Customers</li>
        <li className={'navigation-list__item'}>Reports</li>
      </ul>
  );
}

export default withRouter(NavigationList);
