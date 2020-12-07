import React from 'react';
import './index.scss';

function StatusIcon(props) {
  const {fulfillment, payment, refunding} = props;

  return (
    <span
      className={`status-icon
      ${fulfillment ? `icon-fulfillment--${fulfillment.id}` : ''}
      ${payment ? 'icon-payment' : ''}
      ${refunding ? `icon-refunded--${refunding.id}` : ''}
      `}>
      {props.children}
    </span>
  );
}

export default StatusIcon;
