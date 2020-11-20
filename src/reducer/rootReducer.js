import {combineReducers} from "redux";
import {shopReducer} from "./shopReducer";
import {orderReducer} from "./ordersReducer";

export const rootReducer = combineReducers({
  shops: shopReducer,
  orders: orderReducer,
});
