import {POPUP_SHOW_POPUP, POPUP_HIDDEN_POPUP} from 'actions/actionTypes';

const initialState = {
  name: '',
  data: {},
};

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPUP_HIDDEN_POPUP:
      return {...state, name: '', data: {}};
    case POPUP_SHOW_POPUP:
      return {...state, name: action.payload.name, data: action.payload.data};
    default:
      return state;
  }
};
