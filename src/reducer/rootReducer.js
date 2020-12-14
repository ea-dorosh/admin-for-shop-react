import {combineReducers} from 'redux';
import {shopReducer} from 'reducer/shops/reducer';
import {orderReducer} from 'reducer/orders/reducer';
import {popupReducer} from 'reducer/popups/reducer';
import {customerReducer} from 'reducer/customers/reducer';

export const rootReducer = combineReducers({
  shops: shopReducer,
  customers: customerReducer,
  orders: orderReducer,
  popup: popupReducer,
});
