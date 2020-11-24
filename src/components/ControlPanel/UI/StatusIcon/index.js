import React from 'react'
import 'components/ControlPanel/UI/StatusIcon/index.scss'


function StatusIcon(props) {

  const {fulfillment} = props;

  return (
      <span className={`status-icon
      ${fulfillment ? `icon-fulfillment--${fulfillment.id}` : ''}`}>
              {props.children}
      </span>
  );
}

export default StatusIcon;
