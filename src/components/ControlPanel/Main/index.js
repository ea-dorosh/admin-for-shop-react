import React from 'react';
import './index.scss';

function Main(props) {
  return <div className={'main'}>{props.children}</div>;
}

export default Main;
