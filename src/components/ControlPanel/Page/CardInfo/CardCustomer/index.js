import React from 'react';
import CardInfo from 'components/ControlPanel/Page/CardInfo';

function CardCustomer({customer, editButtonHandler}) {
  return (
    <CardInfo title='Customer' bold editButtonHandler={editButtonHandler}>
      <p>
        {customer.name} {customer.surName}
      </p>
      <p>{customer.email}</p>
      <p>{customer.tel}</p>
    </CardInfo>
  );
}

export default CardCustomer;
