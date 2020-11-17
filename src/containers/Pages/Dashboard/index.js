import React from "react";
import "./index.scss"
import Header from "../../../components/ControlPanel/Header";
import Navigation from "../../../components/ControlPanel/Navigation";
import Page from "../../../components/ControlPanel/Page";
import SalesWidget from "../../../components/Pages/Dashboard/SalesWidget";
import Table from "../../../components/ControlPanel/Table";
import TableHead from "../../../components/ControlPanel/Table/TableHead";
import TableData from "../../../components/ControlPanel/Table/TableData";
import TableRow from "../../../components/ControlPanel/Table/TableRow";


function Dashboard() {

  return (
      <>
        <Header/>
        <Navigation/>
        <Page title={'Dashboard'}>
          <div className='dashboard-page__top-wrapper'>
            <h3 className='dashboard-page__top-title'>Daily Sales</h3>
            <div className='dashboard-page__sales'>
              <SalesWidget
                  total
                  amount={'1315.21'}
              />
              <SalesWidget
                  name={'AVS1'}
                  amount={'135.21'}
              />
              <SalesWidget
                  name={'AVS2'}
                  amount={'735.21'}
              />
            </div>
          </div>
          <div className='dashboard-page__bottom-wrapper'>
            <Table tableType={'daily-sales'}>
              <thead>
              <TableRow>
                <TableHead>Point Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Tel Number</TableHead>
                <TableHead>Inventory</TableHead>
              </TableRow>
              </thead>
              <tbody>
              <TableRow>
                <TableData>AVS1</TableData>
                <TableData>Shop</TableData>
                <TableData>Austin</TableData>
                <TableData>720-815-5550</TableData>
                <TableData>872</TableData>
              </TableRow>
              </tbody>
            </Table>
          </div>
        </Page>
      </>
  );
}

export default Dashboard;
