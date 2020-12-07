import React from 'react';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import {useDispatch, useSelector} from 'react-redux';
import {closePopup} from 'actions/actions';
import PopupForm from 'components/ControlPanel/Popup/PopupForm';
import InputText from 'components/Form/InputText';

function PopupEditCustomer() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orders.orderInfo);

  return (
    <Popup
      title='Edit Customer'
      firstButton={
        <Button marginRight handler={() => dispatch(closePopup())}>
          Cancel
        </Button>
      }
      secondButton={<Button fill>Save</Button>}
      closeBtnHandler={() => dispatch(closePopup())}>
      <div className='popup__content'>
        <PopupForm>
          <InputText labelText='First Name' value={order.customer.name} />
          <InputText labelText='Last Name' value={order.customer.surName} />
          <InputText labelText='Email' value={order.customer.email} />
          <InputText labelText='Phone' value={order.customer.tel} />
        </PopupForm>
      </div>
    </Popup>
  );
}

export default PopupEditCustomer;
