import React from 'react';
import './index.scss';

function Page(props) {
  return <div className={'page'}>{props.children}</div>;
}

export default Page;
