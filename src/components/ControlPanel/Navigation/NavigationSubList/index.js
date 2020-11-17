import React from "react";
import {Link, withRouter} from 'react-router-dom';
import "./index.scss"


function NavigationSubList() {
    return (
        <ul className={'navigation-sub-list'}>
            <li className={'navigation-sub-list__item'}>
              <Link to='/all-offers'>
                All Orders
              </Link>
            </li>
        </ul>
    );
}

export default withRouter(NavigationSubList);
