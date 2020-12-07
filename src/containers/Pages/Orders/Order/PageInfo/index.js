import React from 'react';
import './index.scss';
import CardInfo from 'components/ControlPanel/Page/CardInfo';
import CardCustomer from 'components/ControlPanel/Page/CardInfo/CardCustomer';
import {useDispatch, useSelector} from 'react-redux';
import {showPopup} from 'actions/actions';

function PageInfo() {
  const order = useSelector((state) => state.orders.orderInfo);
  const dispatch = useDispatch();

  return (
    <div className='page-info'>
      {order.shop.type === 'online' ? (
        <CardCustomer customer={order.customer} />
      ) : (
        <CardCustomer customer={order.customer} editButtonHandler={() => dispatch(showPopup('PopupEditCustomer'))} />
      )}
      {order.shop.type === 'online' ? (
        order.shipping.shipping ? (
          <>
            <CardInfo title='Shipping address' editButtonHandler={() => dispatch(showPopup('PopupShippingAddress'))}>
              <p>
                {order.customer.name} {order.customer.surName}
              </p>
              <p>{order.shipping.shippingAddress.address}</p>
              <p>
                {order.shipping.shippingAddress.city}
                {order.shipping.shippingAddress.state}
                {order.shipping.shippingAddress.zip}
              </p>
              <p>{order.shipping.shippingAddress.country}</p>
              <p>{order.shipping.tel}</p>
            </CardInfo>
            <CardInfo title='Billing address' editButtonHandler={() => dispatch(showPopup('PopupBillingAddress'))}>
              {order.shipping.billingAddress.isSame ? (
                <p>Same as shipping address</p>
              ) : (
                <>
                  <p>
                    {order.customer.name} {order.customer.surName}
                  </p>
                  <p>{order.shipping.billingAddress.address}</p>
                  <p>
                    {order.shipping.billingAddress.city} {order.shipping.billingAddress.state}{' '}
                    {order.shipping.billingAddress.zip}
                  </p>
                  <p>{order.shipping.billingAddress.country}</p>
                  <p>{order.shipping.billingAddress.tel}</p>
                </>
              )}
            </CardInfo>
          </>
        ) : (
          <>
            <CardInfo title='Shipping address' editButtonHandler={() => dispatch(showPopup('PopupPickupAddress'))}>
              <p>{order.shipping.pickUp.shop.name}</p>
              <p>{order.shipping.pickUp.shop.address}</p>
              <p>
                {order.shipping.pickUp.shop.city} {order.shipping.pickUp.shop.state} {order.shipping.pickUp.shop.zip}
              </p>
              <p>{order.shipping.pickUp.country}</p>
              <p>{order.shipping.pickUp.tel}</p>
            </CardInfo>
            <CardInfo title='Time of issue' editButtonHandler={() => dispatch(showPopup('PopupTimeOfIssue'))}>
              <p>{order.shipping.pickUp.date}</p>
              <p>{order.shipping.pickUp.time}</p>
            </CardInfo>
          </>
        )
      ) : (
        <>
          <CardInfo title='Seller'>
            <p>
              {order.seller.firstName} {order.seller.lastName}
            </p>
            <p>{order.date}</p>
          </CardInfo>
          <CardInfo title='Shop'>
            <p>{order.shop.name}</p>
            <p>{order.shop.address.address}</p>
            <p>
              {order.shop.addresscity} {order.shop.address.state} {order.shop.address.zip}
            </p>
            <p>{order.shop.address.country}</p>
            <p>{order.shop.address.tel}</p>
          </CardInfo>
        </>
      )}
    </div>
  );
}

export default PageInfo;
