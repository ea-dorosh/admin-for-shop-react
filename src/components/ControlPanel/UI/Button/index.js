import React from 'react'
import 'components/ControlPanel/UI/Button/index.scss'


function Button(props) {
  const {marginRight, fill} = props;
  return (
      <button className={`button 
      ${marginRight ? `button--margin`: ''}
      ${fill ? `button--fill`: ''}`}>{props.children}</button>
  );
}

export default Button;
