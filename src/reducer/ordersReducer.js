import {OrderFilterPaymentTypes, OrderFilterStatusTypes, OrderFilterFulfillmentTypes} from "constants/orderFilter"
import {
  FETCH_ORDERS,
  FILTER_ORDERS_FULFILLMENT,
  FILTER_ORDERS_PAYMENT,
  FILTER_ORDERS_STATUS
} from "actions/actionTypes";


const initialState = {
  orders: [],
  filterStatus: OrderFilterStatusTypes.ALL,
  filterPayment: OrderFilterPaymentTypes.ALL,
  filterFulfillment: OrderFilterFulfillmentTypes.ALL,
};


export const orderReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_ORDERS:
      return {...state, orders: action.payload}
    case FILTER_ORDERS_STATUS:
      return {...state, filterStatus: action.payload}
    case FILTER_ORDERS_PAYMENT:
      return {...state, filterPayment: action.payload}
    case FILTER_ORDERS_FULFILLMENT:
      return {...state, filterFulfillment: action.payload}
    default :
      return state
  }
};
