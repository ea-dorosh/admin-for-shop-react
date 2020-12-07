import React from 'react';
import './index.scss';

function StatusLabel(props) {
  const {fulfillment, fulfillmentAllOrders, addClass, refunding, refundingAllOrders} = props;

  return (
    <span
      className={`status-label
              ${fulfillment ? `fulfillment fulfillment--${fulfillment.id}` : ''}
              ${fulfillmentAllOrders ? `fulfillment-all-orders fulfillment-all-orders--${fulfillmentAllOrders.id}` : ''}
              ${refunding ? `refunding refunding--${refunding.id}` : ''}
              ${refundingAllOrders ? 'refunding-all-orders' : ''}
              ${addClass ? addClass : ''}
             `}>
      {props.children}
    </span>
  );
}

export default StatusLabel;
