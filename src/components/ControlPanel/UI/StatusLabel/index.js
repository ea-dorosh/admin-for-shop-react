import React from 'react'
import 'components/ControlPanel/UI/StatusLabel/index.scss'


function StatusLabel(props) {

  const {payment, fulfillment, addClass} = props;

  return (
      <span
          className={`status-label
              ${payment ? `payment` : ''}
              ${fulfillment ? `fulfillment fulfillment--${fulfillment.id}` : ''}
              ${addClass}
             `}>
              {props.children}
      </span>
  );
}

export default StatusLabel;
