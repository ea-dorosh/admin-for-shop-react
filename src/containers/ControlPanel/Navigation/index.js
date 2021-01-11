import React from 'react';
import './index.scss';
import Dashboard from 'containers/ControlPanel/Navigation/Dashbord';
import Orders from 'containers/ControlPanel/Navigation/Orders';
import Customers from 'containers/ControlPanel/Navigation/Customers';
import Products from 'containers/ControlPanel/Navigation/Products';

const Navigation = () => (
  <div className='navigation'>
    <ul className='navigation-list'>
      <Dashboard />
      <Orders />
      <Products />
      <Customers />
    </ul>
  </div>
);

export default Navigation;
