import {FETCH_SHOPS} from 'actions/actionTypes';

const shopUrl = 'http://localhost:3001/shops';

const ActionCreator = {
  fetchShops: (json) => ({
    type: FETCH_SHOPS,
    payload: json,
  }),
};

const Operation = {
  fetchShops: () => async (dispatch) => {
    const response = await fetch(shopUrl);
    const json = await response.json();
    dispatch(ActionCreator.fetchShops(json));
  },
};

export {Operation};
