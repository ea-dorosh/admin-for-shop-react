import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import "./index.scss"
import {OrderFilterPaymentTypes, OrderFilterStatusTypes, OrderFilterFulfillmentTypes} from "constants/orderFilter"
import {filterOrdersPayment, filterOrdersFulfillment, filterOrdersStatus, fetchOrders} from "actions/actions";
import Header from "components/ControlPanel/Header";
import Navigation from "components/ControlPanel/Navigation";
import Main from "components/ControlPanel/Main";
import Tab from "components/ControlPanel/Tab";
import TabItem from "components/ControlPanel/Tab/TabItem";
import TabFilter from "components/ControlPanel/TabFilter";
import TabFilterItem from "components/ControlPanel/TabFilter/TabFilterItem";
import Table from "components/ControlPanel/Table";
import TableHead from "components/ControlPanel/Table/TableHead";
import TableData from "components/ControlPanel/Table/TableData";
import TableRow from "components/ControlPanel/Table/TableRow";
import MainHeader from "components/ControlPanel/Main/MainHeader";
import TitleH1 from "components/Titles/H1";
import MainContent from "components/ControlPanel/Main/MainContent";


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
      <div className={'app-wrapper'}>
        <Header/>
        <Navigation/>
        <Main>
          <MainHeader>
            <TitleH1 title={'All Orders'}/>
          </MainHeader>
          <MainContent>
            <div className='dashboard-page__wrapper'>
              <div className='dashboard-page__top-inner'>
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
              <div className='dashboard-page__filter-wrapper'>
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
              <Table>
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
                      <TableData id={order.id}>{order.checkout}</TableData>
                      <TableData>{order.date}</TableData>
                      <TableData>{order.customer}</TableData>
                      <TableData payment>{order.payment}</TableData>
                      <TableData fulfillment={order.fulfillment}>{order.fulfillment.name}</TableData>
                      <TableData>${order.total}</TableData>
                    </TableRow>
                ))}
                </tbody>
              </Table>
            </div>
          </MainContent>
        </Main>
      </div>
  );
}

export default AllOrders;
