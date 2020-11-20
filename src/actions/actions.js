import {FILTER_ORDERS_PAYMENT} from "./actionTypes";

export function filterOrdersPayment(filter) {
  return {
    type: FILTER_ORDERS_PAYMENT,
    payload: filter,
  }
}
