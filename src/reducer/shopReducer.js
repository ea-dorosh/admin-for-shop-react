import {FETCH_SHOPS} from "actions/actionTypes";


const initialState = {
  shops: [],
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHOPS:
      return {...state, shops: action.payload}
    default:
      return state;
  }
};
