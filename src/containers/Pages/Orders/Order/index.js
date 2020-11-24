import React, {useEffect} from "react";
import "./index.scss"
import {useSelector, useDispatch} from "react-redux"
import {useParams, useHistory} from 'react-router-dom';
import {fetchOrders} from "actions/actions";
import Page from "components/ControlPanel/Page";
import HeaderContainer from "containers/ControlPanel/Header";
import Navigation from "components/ControlPanel/Navigation";
import Main from "components/ControlPanel/Main";
import MainHeader from "components/ControlPanel/Main/MainHeader";
import MainContent from "components/ControlPanel/Main/MainContent";



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
      <Page>
        <HeaderContainer/>
        <Navigation/>
        {order ?
            <>
              <Main>
                <MainHeader>
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
                </MainHeader>
                <MainContent>

                </MainContent>
              </Main>
            </>
            :
            null
        }
      </Page>
  );
}

export default Order;
