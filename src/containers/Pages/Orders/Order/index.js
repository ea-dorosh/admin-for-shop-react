import React, {useEffect} from "react";
import "./index.scss"
import {useSelector, useDispatch} from "react-redux"
import {useParams, useHistory} from 'react-router-dom';
import Header from "../../../../components/ControlPanel/Header";
import Navigation from "../../../../components/ControlPanel/Navigation";
import Page from "../../../../components/ControlPanel/Page";
import {fetchOrders} from "../../../../actions/actions";


function Order() {

  const params = useParams();
  const history = useHistory();
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();
  const {id} = params;
  const order = orders.find(order => String(order.id) === id);

  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch]);


  return (
      <div className={'app-wrapper'}>
        {order ?
            <>
              <Header/>
              <Navigation/>
              <Page>
                <div className={'page__header order-header'}>
                  <button type='button' className='order-header__link order-header__link--back' onClick={() => history.goBack()}>All Orders</button>
                  <div className='order-header__wrapper'>
                    <span className='order-header__title'>{order.checkout}</span>
                    <span className='order-header__date'>{order.date} from {order.shop.name}</span>
                    <span className='payment order-header__payment'>{order.payment}</span>
                    <span className={`fulfillment fulfillment--${order.fulfillment.id}`}>{order.fulfillment.name}</span>
                  </div>
                  <div className='order-header__link-wrapper'>
                    <button type='button' className='order-header__link'>Print</button>
                    <button type='button' className='order-header__link'>Refund</button>
                  </div>
                </div>
                <div className={'page__content'}>
                  <div className='order-content'>

                  </div>
                </div>
              </Page>
            </>
            :
            null
        }
      </div>
  );
}

export default Order;
