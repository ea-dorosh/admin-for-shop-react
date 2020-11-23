import {combineReducers} from "redux";
import {shopReducer} from "reducer/shopReducer";
import {orderReducer} from "reducer/ordersReducer";

export const rootReducer = combineReducers({
  shops: shopReducer,
  orders: orderReducer,
});
