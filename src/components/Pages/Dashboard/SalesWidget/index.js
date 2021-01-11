import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SalesWidget = ({name, amount, total}) => (
  <div className={classNames('sales-widget', {'sales-widget--total': total})}>
    <span className='sales-widget__company-name'>{name}</span>
    <span className='sales-widget__company-amount'>{amount}</span>
  </div>
);

SalesWidget.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  total: PropTypes.bool,
};

export default SalesWidget;
