import React from 'react';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import {useDispatch, useSelector} from 'react-redux';
import {closePopup} from 'actions/actions';
import InputText from 'components/Form/InputText';
import SelectComponent from 'components/Form/Select';
import {COUNTRIES} from 'constants/countries';
import PopupForm from 'components/ControlPanel/Popup/PopupForm';
import InputCheckbox from 'components/Form/InputCheckbox';
import {Field, Form, Formik} from 'formik';
import {getShippingAddress} from 'reducer/orders/selector';

function PopupShippingAddress() {
  const dispatch = useDispatch();
  const shippingAddress = useSelector((state) => getShippingAddress(state));

  const turnOffCheckBox = (form) => {
    if (form.values.isSame) {
      form.setFieldValue('isSame', !form.values.isSame);
    }
  };

  return (
    <Formik
      initialValues={shippingAddress}
      onSubmit={(values, {setSubmitting}) => {
        dispatch(closePopup());
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      <Form>
        <Popup
          title='Edit shipping address'
          firstButton={
            <Button marginRight handler={() => dispatch(closePopup())}>
              Cancel
            </Button>
          }
          secondButton={
            <Button fill type='submit'>
              Save
            </Button>
          }
          closeBtnHandler={() => dispatch(closePopup())}
          width={654}>
          <div className='popup__content'>
            <div className='checkbox-wrapper'>
              <Field name='isSame' component={InputCheckbox} labelText='Same as billing address' resetValues />
            </div>
            <PopupForm>
              <Field
                name='name'
                component={InputText}
                labelText='First Name'
                type='ship'
                handleCheckbox={turnOffCheckBox}
              />
              <Field
                name='surName'
                component={InputText}
                labelText='Last Name'
                type='ship'
                handleCheckbox={turnOffCheckBox}
              />
              <Field
                name='company'
                component={InputText}
                labelText='Company'
                type='ship'
                handleCheckbox={turnOffCheckBox}
              />
              <Field
                name='tel'
                component={InputText}
                labelText='Phone number'
                type='ship'
                handleCheckbox={turnOffCheckBox}
              />
              <Field
                name='address'
                component={InputText}
                labelText='Address'
                type='ship'
                handleCheckbox={turnOffCheckBox}
              />
              <Field
                name='apartment'
                component={InputText}
                labelText='Apartment, suite, etc. (optional)'
                type='ship'
                handleCheckbox={turnOffCheckBox}
              />
              <Field name='city' component={InputText} labelText='City' type='ship' handleCheckbox={turnOffCheckBox} />
              <Field
                name='country'
                component={SelectComponent}
                labelText='Country/Region'
                options={COUNTRIES}
                type='ship'
                handleCheckbox={turnOffCheckBox}
              />
              <Field
                name='state'
                component={InputText}
                labelText='State'
                type='ship'
                handleCheckbox={turnOffCheckBox}
              />
              <Field
                name='zip'
                component={InputText}
                labelText='ZIP/Postal code'
                type='ship'
                handleCheckbox={turnOffCheckBox}
              />
            </PopupForm>
          </div>
        </Popup>
      </Form>
    </Formik>
  );
}

export default PopupShippingAddress;
