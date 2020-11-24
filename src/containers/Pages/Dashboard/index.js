import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './index.scss'
import {fetchShops} from 'actions/actions'
import HeaderContainer from 'containers/ControlPanel/Header';
import Page from 'components/ControlPanel/Page';
import Navigation from 'components/ControlPanel/Navigation';
import Main from 'components/ControlPanel/Main';
import MainHeader from 'components/ControlPanel/Main/MainHeader';
import SalesWidget from 'components/Pages/Dashboard/SalesWidget';
import Table from 'components/ControlPanel/Table';
import TableHead from 'components/ControlPanel/Table/TableHead';
import TableData from 'components/ControlPanel/Table/TableData';
import TableRow from 'components/ControlPanel/Table/TableRow';
import TitleH1 from 'components/Titles/H1';
import MainContent from 'components/ControlPanel/Main/MainContent';


function Dashboard() {

  const shops = useSelector(state => state.shops.shops);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchShops())
  }, [dispatch])

  const calculateTotal = function () {
    let totalAmount = 0;

    shops.forEach(function (shop) {
      totalAmount = shop.dailySales[0].amount + totalAmount
    });

    return totalAmount
  };

  return (
      <Page>
        <HeaderContainer/>
        <Navigation/>
        <Main>
          <MainHeader>
            <TitleH1 title={'Dashboard'}/>
          </MainHeader>
          <MainContent>
            <div className='dashboard-page__wrapper main-content__wrapper'>
              <h3 className='dashboard-page__title'>Daily Sales</h3>
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
          </MainContent>
        </Main>
      </Page>
  );
}

export default Dashboard;
