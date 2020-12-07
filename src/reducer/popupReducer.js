import {APP_SHOW_POPUP, APP_HIDDEN_POPUP} from 'actions/actionTypes';

const initialState = {
  popup: '',
};

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_HIDDEN_POPUP:
      return {...state, popup: ''};
    case APP_SHOW_POPUP:
      return {...state, popup: action.payload};
    default:
      return state;
  }
};
