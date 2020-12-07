import React from 'react';
import {popupTypes} from 'constants/popupTypes';
import {useSelector} from 'react-redux';

export default function Popups() {
  const popup = useSelector((state) => state.popup.popup);

  function createPopup() {
    const PopupComponent = popupTypes[popup];
    if (PopupComponent) return <PopupComponent />;
    else return null;
  }

  return createPopup();
}
