import React from 'react';
import './index.scss';
import CardInfo from 'components/ControlPanel/Page/CardInfo';
import CardCustomer from 'components/ControlPanel/Page/CardInfo/CardCustomer';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from 'actions/popups';
import {getBillingAddress, getShippingAddress, getOrder, getPickUpData} from 'reducer/orders/selector';

function PageInfo() {
  const order = useSelector((state) => getOrder(state));
  const billingAddress = useSelector((state) => getBillingAddress(state));
  const shippingAddress = useSelector((state) => getShippingAddress(state));
  const pickUpData = useSelector((state) => getPickUpData(state));
  const dispatch = useDispatch();

  return (
    <div className='page-info'>
      {order.shop.type === 'online' ? (
        <CardCustomer customer={order.customer} />
      ) : (
        <CardCustomer
          customer={order.customer}
          editButtonHandler={() => dispatch(ActionCreator.showPopup('PopupEditCustomer'))}
        />
      )}
      {order.shop.type === 'online' ? (
        order.deliveryInfo.shipping.status ? (
          <>
            <CardInfo
              title='Billing address'
              editButtonHandler={() => dispatch(ActionCreator.showPopup('PopupBillingAddress'))}>
              <p>
                {billingAddress.name} {billingAddress.surName}
              </p>
              {billingAddress.company && <p>{billingAddress.company}</p>}
              <p>{billingAddress.address}</p>
              <p>
                {billingAddress.city} {billingAddress.state} {billingAddress.zip}
              </p>
              <p>{billingAddress.country.value}</p>
              <p>{billingAddress.tel}</p>
            </CardInfo>
            <CardInfo
              title='Shipping address'
              editButtonHandler={() => dispatch(ActionCreator.showPopup('PopupShippingAddress'))}>
              {shippingAddress.isSame ? (
                <p>Same as billing address</p>
              ) : (
                <>
                  <p>
                    {shippingAddress.name} {shippingAddress.surName}
                  </p>
                  {shippingAddress.company && <p>{shippingAddress.company}</p>}
                  <p>{shippingAddress.address}</p>
                  <p>
                    {shippingAddress.city} {shippingAddress.state} {shippingAddress.zip}
                  </p>
                  <p>{shippingAddress.country.value}</p>
                  <p>{shippingAddress.tel}</p>
                </>
              )}
            </CardInfo>
          </>
        ) : (
          <>
            <CardInfo
              title='Shipping address'
              editButtonHandler={() => dispatch(ActionCreator.showPopup('PopupPickupAddress'))}>
              <p>{pickUpData.shop.name}</p>
              <p>{pickUpData.shop.address}</p>
              <p>
                {pickUpData.shop.city} {pickUpData.shop.state} {pickUpData.shop.zip}
              </p>
              <p>{pickUpData.shop.country}</p>
              <p>{pickUpData.shop.tel}</p>
            </CardInfo>
            <CardInfo
              title='Time of issue'
              editButtonHandler={() => dispatch(ActionCreator.showPopup('PopupTimeOfIssue'))}>
              <p>{pickUpData.date}</p>
              <p>{pickUpData.time}</p>
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
