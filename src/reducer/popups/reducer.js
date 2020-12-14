import {POPUP_SHOW_POPUP, POPUP_HIDDEN_POPUP} from 'actions/actionTypes';

const initialState = {
  name: '',
};

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPUP_HIDDEN_POPUP:
      return {...state, name: ''};
    case POPUP_SHOW_POPUP:
      return {...state, name: action.payload};
    default:
      return state;
  }
};
