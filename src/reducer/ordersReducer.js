import {orders} from "../mocks";
import {OrderFilterPaymentTypes} from "../constants/orderFilter"
import {OrderFilterFulfillmentTypes} from "../constants/orderFilter"
import {FILTER_ORDERS_PAYMENT} from "../actions/actionTypes";


const initialState = {
  orders: orders,
  filterPayment: OrderFilterPaymentTypes.ALL,
  filterFulfillment: OrderFilterFulfillmentTypes.ALL,
};


export const orderReducer = (state = initialState, action) => {

  switch (action.type) {
    case FILTER_ORDERS_PAYMENT:
      return {...state, filterPayment: action.payload}
  }

  return state
};
