import React from 'react';
import './index.scss';
import Dashboard from 'containers/ControlPanel/Navigation/Dashbord';
import Orders from 'containers/ControlPanel/Navigation/Orders';
import Customers from 'containers/ControlPanel/Navigation/Customers';

function Navigation() {
  return (
    <div className={'navigation'}>
      <ul className={'navigation-list'}>
        <Dashboard />
        <Orders />
        <Customers />
      </ul>
    </div>
  );
}

export default Navigation;
