import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import InputText from 'components/Form/InputText';
import {closePopup} from 'actions/actions';
import PopupForm from 'components/ControlPanel/Popup/PopupForm';

function PopupTimeOfIssue() {
  const dispatch = useDispatch();
  const pickup = useSelector((state) => state.orders.orderInfo.shipping.pickUp);

  return (
    <Popup
      title='Time of issue'
      firstButton={
        <Button marginRight handler={() => dispatch(closePopup())}>
          Cancel
        </Button>
      }
      secondButton={<Button fill>Save</Button>}
      closeBtnHandler={() => dispatch(closePopup())}
      width={654}>
      <div className='popup__content'>
        <PopupForm>
          <InputText labelText='Date' value={pickup.date} />
          <InputText labelText='Time' value={pickup.time} />
        </PopupForm>
      </div>
    </Popup>
  );
}

export default PopupTimeOfIssue;
