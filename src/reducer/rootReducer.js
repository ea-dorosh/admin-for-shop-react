import {combineReducers} from 'redux';
import {shopReducer} from 'reducer/shopReducer';
import {orderReducer} from 'reducer/orders/reducer';
import {popupReducer} from 'reducer/popupReducer';

export const rootReducer = combineReducers({
  shops: shopReducer,
  orders: orderReducer,
  popup: popupReducer,
});
