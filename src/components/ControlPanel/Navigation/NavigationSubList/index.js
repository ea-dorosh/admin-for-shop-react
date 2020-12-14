import React from 'react';
import './index.scss';

function NavigationSubList({children}) {
  return <ul className={'navigation-sub-list'}>{children}</ul>;
}

export default NavigationSubList;
