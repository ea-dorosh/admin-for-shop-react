import {POPUP_HIDDEN_POPUP, POPUP_SHOW_POPUP} from 'actions/actionTypes';

const ActionCreator = {
  showPopup: (popup) => ({
    type: POPUP_SHOW_POPUP,
    payload: typeof popup === 'object' ? popup : {name: popup, data: {}},
  }),
  closePopup: () => ({
    type: POPUP_HIDDEN_POPUP,
    payload: '',
  }),
};

export {ActionCreator};
