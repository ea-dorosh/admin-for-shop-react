import React from "react";

import "./index.css"


function Navigation() {
    return (
        <div className={'navigation'}>
            <ul className={'navigation-list'}>
                <li className={'navigation-list__item navigation-list__item--active'}>Dashboard</li>
                <li className={'navigation-list__item'}>Orders</li>
                <li className={'navigation-list__item'}>Products</li>
                <li className={'navigation-list__item'}>Customers</li>
                <li className={'navigation-list__item'}>Reports</li>
            </ul>
        </div>
    );
}

export default Navigation;