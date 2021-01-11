import React, {useEffect} from 'react';
import './index.scss';
import {useDispatch, useSelector} from 'react-redux';
import {Operation} from 'actions/customers';
import Main from 'components/ControlPanel/Main';
import MainHeader from 'components/ControlPanel/Main/MainHeader';
import MainContent from 'components/ControlPanel/Main/MainContent';
import TitleH1 from 'components/Titles/TitleH1';
import Button from 'components/ControlPanel/UI/Button';
import Table from 'components/ControlPanel/Table';
import TableRow from 'components/ControlPanel/Table/TableRow';
import TableHead from 'components/ControlPanel/Table/TableHead';
import TableData from 'components/ControlPanel/Table/TableData';
import {ActionCreator as ActionPopup} from 'actions/popups';
import {getCustomers} from 'reducer/customers/selector';

const AllCustomers = () => {
  const dispatch = useDispatch();
  const allCustomers = useSelector((state) => getCustomers(state));

  useEffect(() => {
    dispatch(Operation.fetchCustomers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      <MainHeader>
        <div className='customers-header'>
          <TitleH1 title='All Customers' />
          <Button fill marginLeft='auto' handler={() => dispatch(ActionPopup.showPopup('PopupAddCustomer'))}>
            Add Customer
          </Button>
        </div>
      </MainHeader>
      <MainContent>
        <div className='customers-wrapper main-content__wrapper'>
          <Table tableType={'customers'}>
            <thead>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead />
              </TableRow>
            </thead>
            <tbody>
              {allCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableData>
                    {customer.firstName} {customer.lastName}
                  </TableData>
                  <TableData>{customer.email}</TableData>
                  <TableData>{customer.phone}</TableData>
                  <TableData>
                    <Button
                      color={'gray'}
                      handler={() => {
                        dispatch(ActionPopup.showPopup({name: 'PopupSendNotification', data: {id: customer.id}}));
                      }}>
                      Send SMS or Email
                    </Button>
                  </TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      </MainContent>
    </Main>
  );
};

export default AllCustomers;
