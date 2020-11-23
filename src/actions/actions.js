import {
  FETCH_ORDERS,
  FETCH_SHOPS,
  FILTER_ORDERS_FULFILLMENT,
  FILTER_ORDERS_PAYMENT,
  FILTER_ORDERS_STATUS
} from "./actionTypes";


const shopUrl = 'http://localhost:3000/shops';
const orderUrl = 'http://localhost:3000/orders';

export function filterOrdersPayment(filter) {
  return {
    type: FILTER_ORDERS_PAYMENT,
    payload: filter,
  }
}

export function filterOrdersFulfillment(filter) {
  return {
    type: FILTER_ORDERS_FULFILLMENT,
    payload: filter,
  }
}

export function filterOrdersStatus(filter) {
  return {
    type: FILTER_ORDERS_STATUS,
    payload: filter,
  }
}

export function fetchShops() {
  return async dispatch => {
    const response = await fetch(shopUrl);
    const json = await response.json();
    dispatch({type: FETCH_SHOPS, payload: json})
  }
}

export function fetchOrders() {
  return async dispatch => {
    const response = await fetch(orderUrl);
    const json = await response.json();
    dispatch({type: FETCH_ORDERS, payload: json})
  }
}
