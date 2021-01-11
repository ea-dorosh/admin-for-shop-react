import {combineReducers} from 'redux';
import {shopReducer} from 'reducer/shops/reducer';
import {orderReducer} from 'reducer/orders/reducer';
import {popupReducer} from 'reducer/popups/reducer';
import {customerReducer} from 'reducer/customers/reducer';
import {productReducer} from 'reducer/products/reducer';

export const rootReducer = combineReducers({
  shops: shopReducer,
  customers: customerReducer,
  orders: orderReducer,
  products: productReducer,
  popup: popupReducer,
});
