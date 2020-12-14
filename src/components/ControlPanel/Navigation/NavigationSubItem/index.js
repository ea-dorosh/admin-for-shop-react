import React from 'react';
import './index.scss';

function NavigationSubItem({children, active, subMenuHandler}) {
  return (
    <li onClick={subMenuHandler} className={`navigation-sub-item ${active ? 'navigation-sub-item--active' : ''}`}>
      {children}
    </li>
  );
}

export default NavigationSubItem;
