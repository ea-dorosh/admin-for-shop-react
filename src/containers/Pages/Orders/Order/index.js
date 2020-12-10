import React, {useEffect} from 'react';
import './index.scss';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {fetchOrderInfo} from 'actions/actions';
import Main from 'components/ControlPanel/Main';
import MainHeader from 'components/ControlPanel/Main/MainHeader';
import MainContent from 'components/ControlPanel/Main/MainContent';
import StatusLabel from 'components/ControlPanel/UI/StatusLabel';
import PageInfo from 'containers/Pages/Orders/Order/PageInfo';
import OrderDetails from 'containers/Pages/Orders/Order/OrderDetails';
import OrderPayment from 'containers/Pages/Orders/Order/OrderPayment';
import OrderRefund from 'containers/Pages/Orders/Order/OrderRefund';

function Order() {
  const history = useHistory();
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orders.orderInfo);

  useEffect(() => {
    dispatch(fetchOrderInfo());
  }, [dispatch]);

  return (
    order && (
      <Main>
        <MainHeader>
          <button
            type='button'
            className='order-header__link order-header__link--back'
            onClick={() => history.goBack()}>
            All Orders
          </button>
          <div className='order-header__wrapper'>
            <span className='order-header__title'>{order.checkout}</span>
            <span className='order-header__date'>
              {order.date} from {order.shop.name}
            </span>
            <StatusLabel addClass={'margin-right'}>Paid</StatusLabel>
            <StatusLabel fulfillment={order.fulfillment}>{order.fulfillment.name}</StatusLabel>
            {order.refund.id !== 0 && (
              <StatusLabel refunding={order.refund} addClass={'margin-left'}>
                {order.refund.name}
              </StatusLabel>
            )}
          </div>
          <div className='order-header__link-wrapper'>
            <button type='button' className='order-header__link'>
              Print
            </button>
            <button type='button' className='order-header__link'>
              Refund
            </button>
          </div>
        </MainHeader>
        <MainContent>
          <div className='order-content__wrapper'>
            <div className='order-content__left-wrapper'>
              <div className='main-content__wrapper order-content__inner'>
                <OrderDetails />
              </div>
              {order.refund.id !== 0 &&
                order.refundOrders.map((refundOrder) => (
                  <div className='main-content__wrapper order-content__inner' key={refundOrder.id}>
                    <OrderRefund order={refundOrder} />
                  </div>
                ))}
              <div className='main-content__wrapper order-content__inner'>
                <OrderPayment />
              </div>
            </div>
            <PageInfo />
          </div>
        </MainContent>
      </Main>
    )
  );
}

export default Order;
