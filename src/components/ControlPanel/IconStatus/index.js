import React from 'react'
import './index.scss'


function IconStatus(props) {

  const {payment, fulfillment, addClass} = props;

  return (
      <span
          className={`icon-status
              ${payment ? `payment` : ''}
              ${fulfillment ? `fulfillment fulfillment--${fulfillment.id}` : ''}
              ${addClass}
             `}>
              {props.children}
      </span>
  );
}

export default IconStatus;
