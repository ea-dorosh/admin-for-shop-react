import React from "react";
import {Link, withRouter} from 'react-router-dom';
import "./index.scss"
import {AppRoutes} from "constants/app_routes";


function NavigationSubList() {
  return (
      <ul className={'navigation-sub-list'}>
        <li className={'navigation-sub-list__item'}>
          <Link to={AppRoutes.ALL_ORDERS.MAIN} className='navigation-sub-list__item navigation-sub-list__item-link'>
            All Orders
          </Link>
        </li>
      </ul>
  );
}

export default withRouter(NavigationSubList);
