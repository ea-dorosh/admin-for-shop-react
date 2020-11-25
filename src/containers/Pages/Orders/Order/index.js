import React, {useEffect} from 'react';
import './index.scss'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory, useParams} from 'react-router-dom';
import {fetchOrders} from 'actions/actions';
import Page from 'components/ControlPanel/Page';
import HeaderContainer from 'containers/ControlPanel/Header';
import Navigation from 'components/ControlPanel/Navigation';
import Main from 'components/ControlPanel/Main';
import MainHeader from 'components/ControlPanel/Main/MainHeader';
import MainContent from 'components/ControlPanel/Main/MainContent';
import StatusLabel from 'components/ControlPanel/UI/StatusLabel';
import StatusIcon from 'components/ControlPanel/UI/StatusIcon';
import Table from 'components/ControlPanel/Table';
import TableRow from 'components/ControlPanel/Table/TableRow';
import TableData from 'components/ControlPanel/Table/TableData';
import ImageBox from 'components/ControlPanel/UI/ImageBox';
import ProductName from 'components/ControlPanel/UI/ProductName';
import Button from 'components/ControlPanel/UI/Button';


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
                    <StatusLabel payment addClass={'order-header__payment'}>{order.payment.name}</StatusLabel>
                    <StatusLabel fulfillment={order.fulfillment}>{order.fulfillment.name}</StatusLabel>
                  </div>
                  <div className='order-header__link-wrapper'>
                    <button type='button' className='order-header__link'>Print</button>
                    <button type='button' className='order-header__link'>Refund</button>
                  </div>
                </MainHeader>
                <MainContent>
                  <div className='order-content__wrapper'>
                    <div className='order-content__left-wrapper'>
                      <div className='main-content__wrapper order-fulfillment'>
                        <div className='order-fulfillment__top-wrapper'>
                          <StatusIcon fulfillment={order.fulfillment}>{order.fulfillment.name}</StatusIcon>
                          <p className='order-fulfillment__text'>from <span className='order-fulfillment__text--bold'>{order.shop.name}</span></p>
                        </div>
                        <Table tableType={'products'}>
                          <tbody>
                          <TableRow>
                            <TableData><ImageBox/></TableData>
                            <TableData>
                              <ProductName name={'Name product'} category={'Category'}/>
                            </TableData>
                            <TableData>$2.25</TableData>
                            <TableData>x 2</TableData>
                            <TableData>$5.50</TableData>
                          </TableRow>
                          </tbody>
                        </Table>
                        <div className='order-fulfillment__bottom-wrapper'>
                          <Button marginRight>Mark as fulfilled</Button>
                          <Button fill>Create shipping label</Button>
                        </div>
                      </div>
                      <div className='main-content__wrapper order-payment'>
                        <div className='order-payment__top-wrapper'>
                          <StatusIcon payment={order.payment}>{order.payment.name}</StatusIcon>
                        </div>
                        <Table tableType={'order-payment'}>
                          <tbody>
                          <TableRow>
                            <TableData></TableData>
                            <TableData></TableData>
                            <TableData></TableData>
                          </TableRow>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                    <div className='order-customer'>
                      <h3 className='order-customer__title'>Customer</h3>
                    </div>
                  </div>
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
