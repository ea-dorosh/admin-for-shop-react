import React from 'react';
import 'components/ControlPanel/UI/Button/index.scss';

function Button(props) {
  const {marginRight, fill, handler, type} = props;

  return (
    <button
      type={type}
      className={`button 
                      ${marginRight ? `button--margin` : ''}
                      ${fill ? `button--fill` : ''}`}
      onClick={handler}>
      {props.children}
    </button>
  );
}

export default Button;
