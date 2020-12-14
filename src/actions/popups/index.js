import {POPUP_HIDDEN_POPUP, POPUP_SHOW_POPUP} from 'actions/actionTypes';

const ActionCreator = {
  showPopup: (popupName) => ({
    type: POPUP_SHOW_POPUP,
    payload: popupName,
  }),
  closePopup: () => ({
    type: POPUP_HIDDEN_POPUP,
    payload: '',
  }),
};

export {ActionCreator};
