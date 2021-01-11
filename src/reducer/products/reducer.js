import {ProductsInventoryFilterStatusTypes, ProductsInventoryFilterShopTypes} from 'constants/productsFilter';
import {FILTER_PRODUCTS_INVENTORY_STATUS, FILTER_PRODUCTS_INVENTORY_SHOP, FETCH_PRODUCTS} from 'actions/actionTypes';

const initialState = {
  products: [],
  filterStatus: ProductsInventoryFilterStatusTypes.ALL,
  filterShop: ProductsInventoryFilterShopTypes.ALL,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {...state, products: action.payload};
    case FILTER_PRODUCTS_INVENTORY_STATUS:
      return {...state, filterStatus: action.payload};
    case FILTER_PRODUCTS_INVENTORY_SHOP:
      return {...state, filterShop: action.payload};
    default:
      return state;
  }
};
