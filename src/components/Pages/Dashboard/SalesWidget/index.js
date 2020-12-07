import React from 'react';
import './index.scss';

function SalesWidget(props) {
  const {name, amount, total} = props;

  return (
    <div className={`sales-widget ${total ? `sales-widget--total` : null}`}>
      <span className='sales-widget__company-name'>{!total ? name : 'Total'}</span>
      <span className='sales-widget__company-amount'>${amount}</span>
    </div>
  );
}

export default SalesWidget;
