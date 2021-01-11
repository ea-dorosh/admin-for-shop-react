import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_INVENTORY_SHOP,
  FILTER_PRODUCTS_INVENTORY_STATUS,
  SELECT_ACTIVE_PRODUCT,
} from 'actions/actionTypes';

const ordersUrl = 'http://localhost:3001/products';

const ActionCreator = {
  fetchProducts: (json) => ({
    type: FETCH_PRODUCTS,
    payload: json,
  }),
  filterProductsInventoryStatus: (filter) => ({
    type: FILTER_PRODUCTS_INVENTORY_STATUS,
    payload: filter,
  }),
  filterProductsInventoryShop: (filter) => ({
    type: FILTER_PRODUCTS_INVENTORY_SHOP,
    payload: filter,
  }),
  selectActiveProduct: (data) => ({
    type: SELECT_ACTIVE_PRODUCT,
    payload: data,
  }),
};

const Operation = {
  fetchProducts: () => async (dispatch) => {
    const response = await fetch(ordersUrl);
    const json = await response.json();
    dispatch(ActionCreator.fetchProducts(json));
  },
};

export {ActionCreator, Operation};
