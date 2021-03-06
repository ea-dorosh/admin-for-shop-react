import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './index.scss';
import {Operation} from 'actions/shops';
import Main from 'components/ControlPanel/Main';
import MainHeader from 'components/ControlPanel/Main/MainHeader';
import SalesWidget from 'components/Pages/Dashboard/SalesWidget';
import Table from 'components/ControlPanel/Table';
import TableHead from 'components/ControlPanel/Table/TableHead';
import TableData from 'components/ControlPanel/Table/TableData';
import TableRow from 'components/ControlPanel/Table/TableRow';
import TitleH1 from 'components/Titles/TitleH1';
import MainContent from 'components/ControlPanel/Main/MainContent';

const Dashboard = () => {
  const shops = useSelector((state) => state.shops.shops);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Operation.fetchShops());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateTotal = function () {
    let totalAmount = 0;

    shops.forEach(function (shop) {
      totalAmount = shop.dailySales[0].amount + totalAmount;
    });

    return totalAmount;
  };

  return (
    <Main>
      <MainHeader>
        <TitleH1 title='Dashboard' />
      </MainHeader>
      <MainContent>
        <div className='dashboard-page__wrapper main-content__wrapper'>
          <h3 className='dashboard-page__title'>Daily Sales</h3>
          <div className='dashboard-page__sales'>
            <SalesWidget total name='Total' amount={calculateTotal()} />
            {shops.map((shop, index) => (
              <SalesWidget name={shop.shop.name} amount={shop.dailySales[0].amount} key={index} />
            ))}
          </div>
        </div>
        <div className='dashboard-page__bottom-wrapper main-content__wrapper'>
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
                  <TableData>{shop.shop.name}</TableData>
                  <TableData>{shop.shop.value}</TableData>
                  <TableData>{shop.city}</TableData>
                  <TableData>{shop.tel}</TableData>
                  <TableData>{shop.inventory}</TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      </MainContent>
    </Main>
  );
};

export default Dashboard;
