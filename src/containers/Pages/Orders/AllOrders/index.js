import React from "react";
import {useSelector} from "react-redux"
import "./index.scss"
import {OrderFilterPaymentTypes} from "../../../../constants/orderFilter"
import {OrderFilterFulfillmentTypes} from "../../../../constants/orderFilter"
import Header from "../../../../components/ControlPanel/Header";
import Navigation from "../../../../components/ControlPanel/Navigation";
import Page from "../../../../components/ControlPanel/Page";
import Tab from "../../../../components/ControlPanel/Tab";
import TabItem from "../../../../components/ControlPanel/Tab/TabItem";
import TabFilter from "../../../../components/ControlPanel/TabFilter";
import TabFilterItem from "../../../../components/ControlPanel/TabFilter/TabFilterItem";
import Table from "../../../../components/ControlPanel/Table";
import TableHead from "../../../../components/ControlPanel/Table/TableHead";
import TableData from "../../../../components/ControlPanel/Table/TableData";
import TableRow from "../../../../components/ControlPanel/Table/TableRow";
import PageHeader from "../../../../components/ControlPanel/Page/PageHeader";


function AllOrders() {

  const orders = useSelector(state => state.orders.orders);
  const filterPayment = useSelector(state => state.orders.filterPayment);
  const filterFulfillment = useSelector(state => state.orders.filterFulfillment);
  console.log(filterPayment)

  return (
      <>
        <Header/>
        <Navigation/>
        <Page>
          <PageHeader title={'All Orders'}/>
          <div className={'page__content'}>
            <div className='dashboard-page__wrapper'>
              <div className='dashboard-page__top-inner'>
                <Tab>
                  <TabItem title={'All'} isActive/>
                  <TabItem title={'Offline'}/>
                  <TabItem title={'Online'}/>
                </Tab>
              </div>
              <div className='dashboard-page__filter-wrapper'>
                <TabFilter>
                  {Object.values(OrderFilterPaymentTypes).map((filter) => (
                      <TabFilterItem
                          title={filter}
                          key={filter}
                          isActive={filterPayment === filter}/>
                  ))}
                </TabFilter>
                <TabFilter>
                  {Object.values(OrderFilterFulfillmentTypes).map((filter) => (
                      <TabFilterItem
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
                      <TableData>{order.checkout}</TableData>
                      <TableData>{order.date}</TableData>
                      <TableData>{order.customer}</TableData>
                      <TableData>{order.payment}</TableData>
                      <TableData>{order.fulfillment}</TableData>
                      <TableData>${order.total}</TableData>
                    </TableRow>
                ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Page>
      </>
  );
}

export default AllOrders;
