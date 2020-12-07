import React from 'react';
import 'components/ControlPanel/UI/Button/index.scss';

function Button(props) {
  const {marginRight, fill, handler} = props;

  return (
    <button
      className={`button 
                      ${marginRight ? `button--margin` : ''}
                      ${fill ? `button--fill` : ''}`}
      onClick={handler}>
      {props.children}
    </button>
  );
}

export default Button;
