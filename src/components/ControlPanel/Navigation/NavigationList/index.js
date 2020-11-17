import React from "react";
import "./index.scss"
import NavigationSubList from "../NavigationSubList";


function NavigationList() {
    return (
        <ul className={'navigation-list'}>
            <li className={'navigation-list__item navigation-list__item--active'}>Dashboard</li>
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

export default NavigationList;
