import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const StatusIcon = ({fulfillment, payment, refunding, children}) => (
  <span
    className={classNames('status-icon', {
      [`status-icon--fulfillment-${fulfillment && fulfillment.id}`]: fulfillment,
      'status-icon--payment': payment,
      [`status-icon--refunded-${refunding && refunding.id}`]: refunding,
    })}>
    {children}
  </span>
);

StatusIcon.propTypes = {
  fulfillment: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  refunding: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  payment: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default StatusIcon;
