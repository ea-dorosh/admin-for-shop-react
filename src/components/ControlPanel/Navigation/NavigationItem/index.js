import React from 'react';
import './index.scss';

function NavigationItem({children, menuHandler}) {
  return (
    <li className={`navigation-item`} onClick={menuHandler}>
      {children}
    </li>
  );
}

export default NavigationItem;
