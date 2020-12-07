import React from 'react';
import './index.scss';

function MainContent(props) {
  return <div className={'main-content'}>{props.children}</div>;
}

export default MainContent;
