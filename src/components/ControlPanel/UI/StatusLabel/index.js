import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const StatusLabel = ({fulfillment, fulfillmentAllOrders, refunding, children}) => (
  <span
    className={classNames('status-label', {
      [`status-label--fulfillment-${fulfillment && fulfillment.id}`]: fulfillment,
      [`status-label--fulfillment-all-orders-${fulfillmentAllOrders && fulfillmentAllOrders.id}`]: fulfillmentAllOrders,
      [`status-label--refunding-${refunding && refunding.id}`]: refunding,
    })}>
    {children}
  </span>
);

StatusLabel.propTypes = {
  fulfillment: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  fulfillmentAllOrders: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  refunding: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  children: PropTypes.node.isRequired,
};

export default StatusLabel;
