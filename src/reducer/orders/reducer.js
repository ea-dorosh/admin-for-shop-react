import {OrderFilterRefundTypes, OrderFilterStatusTypes, OrderFilterFulfillmentTypes} from 'constants/orderFilter';
import {
  FETCH_ORDER_INFO,
  FETCH_ORDERS,
  FILTER_ORDERS_FULFILLMENT,
  FILTER_ORDERS_REFUND,
  FILTER_ORDERS_STATUS,
} from 'actions/actionTypes';

const initialState = {
  orders: [],
  filterStatus: OrderFilterStatusTypes.ALL,
  filterRefund: OrderFilterRefundTypes.ALL,
  filterFulfillment: OrderFilterFulfillmentTypes.ALL,
  orderInfo: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return {...state, orders: action.payload};
    case FILTER_ORDERS_STATUS:
      return {...state, filterStatus: action.payload};
    case FILTER_ORDERS_REFUND:
      return {...state, filterRefund: action.payload};
    case FILTER_ORDERS_FULFILLMENT:
      return {...state, filterFulfillment: action.payload};
    case FETCH_ORDER_INFO:
      return {...state, orderInfo: action.payload};
    default:
      return state;
  }
};
