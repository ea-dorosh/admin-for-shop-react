import {
  FETCH_ORDER_INFO,
  FETCH_ORDERS,
  FILTER_ORDERS_FULFILLMENT,
  FILTER_ORDERS_REFUND,
  FILTER_ORDERS_STATUS,
} from 'actions/actionTypes';

const orderInfoUrl = {
  onlinePaid: 'http://localhost:3001/detailOrderOnlinePaid',
  onlineRefund: 'http://localhost:3001/detailOrderOnlineRefund',
  offlineFulfilled: 'http://localhost:3001/detailOrderOfflineFulfilled',
  offlineUnfulfilled: 'http://localhost:3001/detailOrderOfflineUnfulfilled',
};
const ordersUrl = 'http://localhost:3001/allOrders';

const ActionCreator = {
  fetchOrders: (json) => ({
    type: FETCH_ORDERS,
    payload: json,
  }),
  fetchOrder: (json) => ({
    type: FETCH_ORDER_INFO,
    payload: json,
  }),
  filterOrdersRefund: (filter) => ({
    type: FILTER_ORDERS_REFUND,
    payload: filter,
  }),
  filterOrdersFulfillment: (filter) => ({
    type: FILTER_ORDERS_FULFILLMENT,
    payload: filter,
  }),
  filterOrdersStatus: (filter) => ({
    type: FILTER_ORDERS_STATUS,
    payload: filter,
  }),
};

const Operation = {
  fetchOrders: () => async (dispatch) => {
    const response = await fetch(ordersUrl);
    const json = await response.json();
    dispatch(ActionCreator.fetchOrders(json));
  },
  fetchOrderInfo: () => async (dispatch) => {
    const response = await fetch(orderInfoUrl.onlinePaid);
    const json = await response.json();
    dispatch(ActionCreator.fetchOrder(json));
  },
};

export {ActionCreator, Operation};
