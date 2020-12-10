import React from 'react';
import './index.scss';
import StatusIcon from 'components/ControlPanel/UI/StatusIcon';
import Table from 'components/ControlPanel/Table';
import TableRow from 'components/ControlPanel/Table/TableRow';
import TableData from 'components/ControlPanel/Table/TableData';
import {useSelector} from 'react-redux';
import StatusLabel from 'components/ControlPanel/UI/StatusLabel';

function OrderPayment() {
  const order = useSelector((state) => state.orders.orderInfo);

  return (
    <div className='order-payment'>
      <div className='order-payment__top-wrapper'>
        <StatusIcon payment>Paid</StatusIcon>
        {order.shop.type === 'offline' && <StatusLabel addClass={'margin-left'}>{order.payment.type}</StatusLabel>}
      </div>
      <Table tableType={'order-payment'}>
        <tbody>
          <TableRow>
            <TableData>Subtotal</TableData>
            <TableData>{order.products.length} items</TableData>
            <TableData>${order.payment.subTotal}</TableData>
          </TableRow>
          {order.payment.discount && (
            <TableRow>
              <TableData colspan={2}>Discount</TableData>
              <TableData>-${order.payment.discount}</TableData>
            </TableRow>
          )}
          {order.shop.type === 'online' && (
            <TableRow>
              <TableData>Shipping</TableData>
              <TableData>
                {order.deliveryInfo.shipping.company} ({order.deliveryInfo.shipping.weight})
              </TableData>
              <TableData>${order.deliveryInfo.shipping.coast}</TableData>
            </TableRow>
          )}
          <TableRow>
            <TableData colspan={2}>Tax</TableData>
            <TableData>${order.payment.tax}</TableData>
          </TableRow>
          <TableRow>
            <TableData colspan={2}>
              <span className='total'>Total</span>
            </TableData>
            <TableData>
              <span className='total'>${order.payment.total}</span>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData colspan={2}>Paid by customer</TableData>
            <TableData>${order.payment.total}</TableData>
          </TableRow>
        </tbody>
      </Table>
    </div>
  );
}

export default OrderPayment;
