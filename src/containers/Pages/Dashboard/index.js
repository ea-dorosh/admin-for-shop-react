import React from "react";
import {useSelector} from "react-redux"
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

  const shops = useSelector(state => state.shops.shops);

  const calculateTotal = function () {
    let totalAmount = 0;

    shops.forEach(function (shop) {
      totalAmount = shop.dailySales[0].amount + totalAmount
    });

    return totalAmount
  };

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
                  amount={calculateTotal()}
              />
              {shops.map((shop, index) => (
                  <SalesWidget
                      name={shop.name}
                      amount={shop.dailySales[0].amount}
                      key={index}
                  />
              ))}
            </div>
          </div>
          <div className='dashboard-page__bottom-wrapper'>
            <Table tableType={'shops'}>
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
              {shops.map((shop, index) => (
                  <TableRow key={index}>
                    <TableData>{shop.name}</TableData>
                    <TableData>{shop.type}</TableData>
                    <TableData>{shop.city}</TableData>
                    <TableData>{shop.tel}</TableData>
                    <TableData>{shop.inventory}</TableData>
                  </TableRow>
              ))}
              </tbody>
            </Table>
          </div>
        </Page>
      </>
  );
}

export default Dashboard;
