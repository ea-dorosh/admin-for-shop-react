import React from 'react';
import './index.scss';

function Button(props) {
  const {marginRight, mlAuto, fill, handler, type, secondary} = props;

  return (
    <button
      type={type}
      className={`button 
                      ${marginRight ? `button--margin` : ''}
                      ${fill ? `button--fill` : ''}
                      ${secondary ? `button--secondary` : ''}
                      ${mlAuto ? `button--margin-left-auto` : ''}`}
      onClick={handler}>
      {props.children}
    </button>
  );
}

export default Button;
