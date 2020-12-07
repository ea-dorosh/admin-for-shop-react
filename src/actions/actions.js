import {
  APP_HIDDEN_POPUP,
  APP_SHOW_POPUP,
  FETCH_ORDER_INFO,
  FETCH_ORDERS,
  FETCH_SHOPS,
  FILTER_ORDERS_FULFILLMENT,
  FILTER_ORDERS_REFUND,
  FILTER_ORDERS_STATUS,
} from './actionTypes';

const shopUrl = 'http://localhost:3001/shops';
const ordersUrl = 'http://localhost:3001/allOrders';
const orderInfoUrl = {
  onlinePaid: 'http://localhost:3001/detailOrderOnlinePaid',
  onlineRefund: 'http://localhost:3001/detailOrderOnlineRefund',
  offlineFulfilled: 'http://localhost:3001/detailOrderOfflineFulfilled',
  offlineUnfulfilled: 'http://localhost:3001/detailOrderOfflineUnfulfilled',
};

export function filterOrdersRefund(filter) {
  return {
    type: FILTER_ORDERS_REFUND,
    payload: filter,
  };
}

export function filterOrdersFulfillment(filter) {
  return {
    type: FILTER_ORDERS_FULFILLMENT,
    payload: filter,
  };
}

export function filterOrdersStatus(filter) {
  return {
    type: FILTER_ORDERS_STATUS,
    payload: filter,
  };
}

export function fetchShops() {
  return async (dispatch) => {
    const response = await fetch(shopUrl);
    const json = await response.json();
    dispatch({type: FETCH_SHOPS, payload: json});
  };
}

export function fetchOrders() {
  return async (dispatch) => {
    const response = await fetch(ordersUrl);
    const json = await response.json();
    dispatch({type: FETCH_ORDERS, payload: json});
  };
}

export function fetchOrderInfo() {
  return async (dispatch) => {
    const response = await fetch(orderInfoUrl.onlinePaid);
    const json = await response.json();
    dispatch({type: FETCH_ORDER_INFO, payload: json});
  };
}

export function showPopup(popupName) {
  return {
    type: APP_SHOW_POPUP,
    payload: popupName,
  };
}

export function closePopup() {
  return {
    type: APP_HIDDEN_POPUP,
    payload: '',
  };
}
