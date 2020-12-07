import React from 'react';
import './index.scss';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import {useDispatch, useSelector} from 'react-redux';
import {closePopup} from 'actions/actions';

function PopupFulfillment() {
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.orders.orderInfo.checkout);

  return (
    <Popup
      title='Mark as fulfilled'
      firstButton={
        <Button marginRight handler={() => dispatch(closePopup())}>
          Cancel
        </Button>
      }
      secondButton={<Button fill>Apply</Button>}
      closeBtnHandler={() => dispatch(closePopup())}>
      <div className='popup__content'>
        <p className='popup-text'>Are you sure you want to Mark as fulfilled for {checkout}</p>
      </div>
    </Popup>
  );
}

export default PopupFulfillment;
