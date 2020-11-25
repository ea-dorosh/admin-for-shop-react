import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import {AppRoutes} from 'constants/app_routes.js';
import './index.scss'
import {OrderFilterFulfillmentTypes, OrderFilterPaymentTypes, OrderFilterStatusTypes} from 'constants/orderFilter'
import {fetchOrders, filterOrdersFulfillment, filterOrdersPayment, filterOrdersStatus} from 'actions/actions';
import Page from 'components/ControlPanel/Page';
import HeaderContainer from 'containers/ControlPanel/Header';
import Navigation from 'components/ControlPanel/Navigation';
import Main from 'components/ControlPanel/Main';
import MainHeader from 'components/ControlPanel/Main/MainHeader';
import MainContent from 'components/ControlPanel/Main/MainContent';
import TitleH1 from 'components/Titles/H1';
import Tab from 'components/ControlPanel/Tab';
import TabItem from 'components/ControlPanel/Tab/TabItem';
import TabFilter from 'components/ControlPanel/TabFilter';
import TabFilterItem from 'components/ControlPanel/TabFilter/TabFilterItem';
import Table from 'components/ControlPanel/Table';
import TableHead from 'components/ControlPanel/Table/TableHead';
import TableData from 'components/ControlPanel/Table/TableData';
import TableRow from 'components/ControlPanel/Table/TableRow';
import StatusLabel from 'components/ControlPanel/UI/StatusLabel';


function AllOrders() {

  const orders = useSelector(state => state.orders.orders);
  const filterStatus = useSelector(state => state.orders.filterStatus);
  const filterPayment = useSelector(state => state.orders.filterPayment);
  const filterFulfillment = useSelector(state => state.orders.filterFulfillment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch]);

  return (
      <Page>
        <HeaderContainer/>
        <Navigation/>
        <Main>
          <MainHeader>
            <TitleH1 title={'All Orders'}/>
          </MainHeader>
          <MainContent>
            <div className='all-orders-page__wrapper main-content__wrapper'>
              <div className='all-orders-page__top-wrapper'>
                <Tab>
                  {Object.values(OrderFilterStatusTypes).map((filter) => (
                      <TabItem
                          filterHandle={filterOrdersStatus}
                          title={filter}
                          isActive={filterStatus === filter}
                          key={filter}/>
                  ))}
                </Tab>
              </div>
              <div className='all-orders-page__filter-wrapper'>
                <TabFilter>
                  {Object.values(OrderFilterPaymentTypes).map((filter) => (
                      <TabFilterItem
                          filterHandle={filterOrdersPayment}
                          title={filter}
                          key={filter}
                          isActive={filterPayment === filter}/>
                  ))}
                </TabFilter>
                <TabFilter>
                  {Object.values(OrderFilterFulfillmentTypes).map((filter) => (
                      <TabFilterItem
                          filterHandle={filterOrdersFulfillment}
                          title={filter}
                          key={filter}
                          isActive={filterFulfillment === filter}/>
                  ))}
                </TabFilter>
              </div>
              <Table tableType={'orders'}>
                <thead>
                <TableRow>
                  <TableHead>Checkout</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Fulfillment</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
                </thead>
                <tbody>
                {orders.map((order, index) => (
                    <TableRow key={index}>
                      <TableData>
                        <Link to={AppRoutes.order(order.id)}>{order.checkout}</Link>
                      </TableData>
                      <TableData>{order.date}</TableData>
                      <TableData>{order.customer}</TableData>
                      <TableData>
                        <StatusLabel payment>{order.payment.name}</StatusLabel>
                      </TableData>
                      <TableData>
                        <StatusLabel fulfillment={order.fulfillment}>{order.fulfillment.name}</StatusLabel>
                      </TableData>
                      <TableData>${order.total}</TableData>
                    </TableRow>
                ))}
                </tbody>
              </Table>
            </div>
          </MainContent>
        </Main>
      </Page>
  );
}

export default AllOrders;
