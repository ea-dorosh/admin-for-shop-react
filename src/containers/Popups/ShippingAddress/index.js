import React from 'react';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from 'actions/popups';
import InputText from 'components/Form/InputText';
import SelectComponent from 'components/Form/Select';
import {COUNTRIES} from 'constants/countries';
import PopupForm from 'components/ControlPanel/Popup/PopupForm';
import InputCheckbox from 'components/Form/InputCheckbox';
import {Field, Form, Formik} from 'formik';
import {getShippingAddress} from 'reducer/orders/selector';

const PopupShippingAddress = () => {
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
        dispatch(ActionCreator.closePopup());
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      {(props) => {
        return (
          <Form>
            <Popup
              title='Edit shipping address'
              width='654px'
              firstButton={
                <Button marginRight='20px' handler={() => dispatch(ActionCreator.closePopup())}>
                  Cancel
                </Button>
              }
              secondButton={
                <Button fill type='submit' handler={() => {}}>
                  Save
                </Button>
              }
              closeBtnHandler={() => dispatch(ActionCreator.closePopup())}>
              <div className='popup__content'>
                <div className='checkbox-wrapper'>
                  <Field
                    name='isSame'
                    component={InputCheckbox}
                    labelText='Same as billing address'
                    onChange={() => props.handleReset()}
                  />
                </div>
                <PopupForm>
                  <Field name='name' component={InputText} labelText='First Name' handleCheckbox={turnOffCheckBox} />
                  <Field name='surName' component={InputText} labelText='Last Name' handleCheckbox={turnOffCheckBox} />
                  <Field name='company' component={InputText} labelText='Company' handleCheckbox={turnOffCheckBox} />
                  <Field name='tel' component={InputText} labelText='Phone number' handleCheckbox={turnOffCheckBox} />
                  <Field name='address' component={InputText} labelText='Address' handleCheckbox={turnOffCheckBox} />
                  <Field
                    name='apartment'
                    component={InputText}
                    labelText='Apartment, suite, etc. (optional)'
                    handleCheckbox={turnOffCheckBox}
                  />
                  <Field
                    name='city'
                    component={InputText}
                    labelText='City'
                    type='ship'
                    handleCheckbox={turnOffCheckBox}
                  />
                  <Field
                    name='country'
                    component={SelectComponent}
                    labelText='Country/Region'
                    options={COUNTRIES}
                    handleCheckbox={turnOffCheckBox}
                  />
                  <Field name='state' component={InputText} labelText='State' handleCheckbox={turnOffCheckBox} />
                  <Field
                    name='zip'
                    component={InputText}
                    labelText='ZIP/Postal code'
                    handleCheckbox={turnOffCheckBox}
                  />
                </PopupForm>
              </div>
            </Popup>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PopupShippingAddress;
