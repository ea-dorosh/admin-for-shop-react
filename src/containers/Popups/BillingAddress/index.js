import React from 'react';
import './index.scss';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import {useDispatch, useSelector} from 'react-redux';
import {closePopup} from 'actions/actions';
import InputText from 'components/Form/InputText';
import {COUNTRIES} from 'constants/countries';
import InputCheckbox from 'components/Form/InputCheckbox';
import SelectComponent from 'components/Form/Select';
import PopupForm from 'components/ControlPanel/Popup/PopupForm';

function PopupBillingAddress() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orders.orderInfo);

  return (
    <Popup
      title='Edit billing address'
      firstButton={
        <Button marginRight handler={() => dispatch(closePopup())}>
          Cancel
        </Button>
      }
      secondButton={<Button fill>Save</Button>}
      closeBtnHandler={() => dispatch(closePopup())}
      width={654}>
      <div className='popup__content'>
        <div className='checkbox-wrapper'>
          <InputCheckbox labelText='Same as shipping address' />
        </div>
        <PopupForm>
          <InputText labelText='First Name' value={order.customer.name} />
          <InputText labelText='Last Name' value={order.customer.surName} />
          <InputText labelText='Company' value={order.shipping.company} />
          <InputText labelText='Phone number' value={order.customer.tel} />
          <InputText labelText='Address' value={order.shipping.shippingAddress.address} />
          <InputText labelText='Apartment, suite, etc. (optional)' />
          <InputText labelText='City' value={order.shipping.shippingAddress.city} />
          <SelectComponent options={COUNTRIES} label='Country/Region' defaultValue={COUNTRIES[0]} />
          <InputText labelText='State' value={order.shipping.shippingAddress.state} />
          <InputText labelText='ZIP/Postal code' value={order.shipping.shippingAddress.zip} />
        </PopupForm>
      </div>
    </Popup>
  );
}

export default PopupBillingAddress;
