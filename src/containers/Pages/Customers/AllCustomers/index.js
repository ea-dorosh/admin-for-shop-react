import React, {useEffect} from 'react';
import './index.scss';
import {useDispatch, useSelector} from 'react-redux';
import {Operation} from 'actions/customers';
import Main from 'components/ControlPanel/Main';
import MainHeader from 'components/ControlPanel/Main/MainHeader';
import MainContent from 'components/ControlPanel/Main/MainContent';
import TitleH1 from 'components/Titles/H1';
import Button from 'components/ControlPanel/UI/Button';
import Table from 'components/ControlPanel/Table';
import TableRow from 'components/ControlPanel/Table/TableRow';
import TableHead from 'components/ControlPanel/Table/TableHead';
import TableData from 'components/ControlPanel/Table/TableData';
import {ActionCreator} from 'actions/popups';

function AllCustomers() {
  const dispatch = useDispatch();
  const allCustomers = useSelector((state) => state.customers.customers);

  useEffect(() => {
    dispatch(Operation.fetchCustomers());
  }, []);

  return (
    <Main>
      <MainHeader>
        <div className='customers-header'>
          <TitleH1 title='All Customers' />
          <Button fill mlAuto handler={() => dispatch(ActionCreator.showPopup('PopupAddCustomer'))}>
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
                    <Button secondary>Send SMS or Email</Button>
                  </TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </div>
      </MainContent>
    </Main>
  );
}

export default AllCustomers;
