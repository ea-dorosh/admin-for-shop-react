import React from 'react';
import './index.scss';
import StatusIcon from 'components/ControlPanel/UI/StatusIcon';
import Table from 'components/ControlPanel/Table';
import TableRow from 'components/ControlPanel/Table/TableRow';
import TableData from 'components/ControlPanel/Table/TableData';
import ImageBox from 'components/ControlPanel/UI/ImageBox';
import ProductName from 'components/ControlPanel/UI/ProductName';
import Button from 'components/ControlPanel/UI/Button';
import {showPopup} from 'actions/actions';
import {useSelector, useDispatch} from 'react-redux';
import {calculateProductAmount} from 'utils/utils';

function OrderDetails() {
  const order = useSelector((state) => state.orders.orderInfo);
  const dispatch = useDispatch();

  return (
    <div className='order-fulfillment'>
      <div className='order-fulfillment__top-wrapper'>
        <StatusIcon fulfillment={order.fulfillment}>{order.fulfillment.name}</StatusIcon>
        {order.fulfillment.id === 0 ? (
          <span className='order-fulfillment__code'>#{order.fulfillment.code}</span>
        ) : (
          <p className='order-fulfillment__text'>
            from <span className='order-fulfillment__text--bold'>{order.shop.name}</span>
          </p>
        )}
      </div>
      <Table tableType={'products'}>
        <tbody>
          {order.products.map((product) => (
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
      {order.fulfillment.id === 1 && (
        <div className='order-fulfillment__bottom-wrapper'>
          {order.shipping && order.shipping.shipping ? (
            <>
              <Button marginRight handler={() => dispatch(showPopup('PopupFulfillment'))}>
                Mark as fulfilled
              </Button>
              <Button fill>Create shipping label</Button>
            </>
          ) : (
            <Button handler={() => dispatch(showPopup('PopupFulfillment'))} fill>
              Mark as fulfilled
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
