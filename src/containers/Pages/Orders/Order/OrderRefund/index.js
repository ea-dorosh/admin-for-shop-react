import React from 'react';
import './index.scss';
import StatusIcon from 'components/ControlPanel/UI/StatusIcon';
import Table from 'components/ControlPanel/Table';
import TableRow from 'components/ControlPanel/Table/TableRow';
import TableData from 'components/ControlPanel/Table/TableData';
import ImageBox from 'components/ControlPanel/UI/ImageBox';
import ProductName from 'components/ControlPanel/UI/ProductName';
import {calculateProductAmount} from 'utils/utils';

function OrderRefund({order}) {
  return (
    <div className='order-refund'>
      <div className='order-refund__top-wrapper'>
        <StatusIcon refunding={order.status}>{order.status.name}</StatusIcon>
        <p className='order-refund__text'>#{order.id}</p>
      </div>
      <Table tableType={'products'}>
        <tbody>
          {order.refundProducts.map((product) => (
            <TableRow key={product.id}>
              <TableData>
                <ImageBox img={product.img} />
              </TableData>
              <TableData>
                <ProductName name={product.title} category={product.category} />
              </TableData>
              <TableData>${product.price}</TableData>
              <TableData>x {product.count}</TableData>
              <TableData>${calculateProductAmount(product.price, product.count)}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <div className='order-refund__result'>
        <div className='order-refund__result-wrapper'>
          <span className='order-refund__result-text'>Subtotal</span>
          <span className='order-refund__result-text total'>Total</span>
        </div>
        <div className='order-refund__result-wrapper'>
          <span className='order-refund__result-text'>${order.subtotal}</span>
          <span className='order-refund__result-text total'>${order.total}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderRefund;
