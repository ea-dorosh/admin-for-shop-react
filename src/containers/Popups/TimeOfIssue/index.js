import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import InputText from 'components/Form/InputText';
import {closePopup} from 'actions/actions';
import PopupForm from 'components/ControlPanel/Popup/PopupForm';
import {getPickUpData} from 'reducer/orders/selector';

function PopupTimeOfIssue() {
  const dispatch = useDispatch();
  const pickUpData = useSelector((state) => getPickUpData(state));

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
          <InputText labelText='Date' value={pickUpData.date} />
          <InputText labelText='Time' value={pickUpData.time} />
        </PopupForm>
      </div>
    </Popup>
  );
}

export default PopupTimeOfIssue;
