import React from 'react';
import PropTypes from 'prop-types';
import CardInfo from 'components/ControlPanel/Page/CardInfo';

const CardCustomer = ({customer, editButtonHandler}) => (
  <CardInfo title='Customer' bold editButtonHandler={editButtonHandler}>
    <p>
      {customer.name} {customer.surName}
    </p>
    <p>{customer.email}</p>
    <p>{customer.tel}</p>
  </CardInfo>
);

CardCustomer.propTypes = {
  customer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
  }),
  editButtonHandler: PropTypes.func,
};

export default CardCustomer;
