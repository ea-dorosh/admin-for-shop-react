import {FETCH_CUSTOMERS} from 'actions/actionTypes';

const initialState = {
  customers: [],
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return {...state, customers: action.payload};
    default:
      return state;
  }
};
