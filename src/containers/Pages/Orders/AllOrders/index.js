import React from "react";
import "./index.scss"
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


function AllOrders() {

  return (
      <>
        <Header/>
        <Navigation/>
        <Page title={'All Orders'}>
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
                <TabFilterItem title={'All'} isActive/>
                <TabFilterItem title={'Paid'}/>
                <TabFilterItem title={'Partially refunded'}/>
                <TabFilterItem title={'Refunded'}/>
              </TabFilter>
              <TabFilter>
                <TabFilterItem title={'All'} isActive/>
                <TabFilterItem title={'Fulfilled'}/>
                <TabFilterItem title={'Unfulfilled'}/>
                <TabFilterItem title={'Partly fulfilled'}/>
              </TabFilter>
            </div>
            <Table>
              <thead>
              <TableHead>Checkout</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Fulfillment</TableHead>
              <TableHead>Total</TableHead>
              </thead>
              <tbody>
              <TableData>#online_7392</TableData>
              <TableData>Feb24 at 02:30am</TableData>
              <TableData>Anonumos</TableData>
              <TableData>Paid</TableData>
              <TableData>Fulfilled</TableData>
              <TableData>$728.03</TableData>
              </tbody>
            </Table>
          </div>
        </Page>
      </>
  );
}

export default AllOrders;
