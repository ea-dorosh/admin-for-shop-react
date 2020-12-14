import React from 'react';
import './index.scss';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from 'actions/popups';
import InputText from 'components/Form/InputText';
import {COUNTRIES} from 'constants/countries';
import SelectComponent from 'components/Form/Select';
import PopupForm from 'components/ControlPanel/Popup/PopupForm';
import {Field, Form, Formik} from 'formik';
import {getBillingAddress} from 'reducer/orders/selector';

function PopupBillingAddress() {
  const dispatch = useDispatch();
  const billingAddress = useSelector((state) => getBillingAddress(state));

  function handleSubmit(values, {setSubmitting}) {
    dispatch(ActionCreator.closePopup());
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return (
    <Formik initialValues={billingAddress} onSubmit={handleSubmit}>
      <Form>
        <Popup
          title='Edit billing address'
          firstButton={
            <Button marginRight handler={() => dispatch(ActionCreator.closePopup())}>
              Cancel
            </Button>
          }
          secondButton={
            <Button fill type='submit'>
              Save
            </Button>
          }
          closeBtnHandler={() => dispatch(ActionCreator.closePopup())}
          width={654}>
          <div className='popup__content'>
            <PopupForm>
              <Field name='name' component={InputText} labelText='First Name' />
              <Field name='surName' component={InputText} labelText='Last Name' />
              <Field name='company' component={InputText} labelText='Company' />
              <Field name='tel' component={InputText} labelText='Phone number' />
              <Field name='address' component={InputText} labelText='Address' />
              <Field name='apartment' component={InputText} labelText='Apartment, suite, etc. (optional)' />
              <Field name='city' component={InputText} labelText='City' />
              <Field name='country' component={SelectComponent} labelText='Country/Region' options={COUNTRIES} />
              <Field name='state' component={InputText} labelText='State' />
              <Field name='zip' component={InputText} labelText='ZIP/Postal code' />
            </PopupForm>
          </div>
        </Popup>
      </Form>
    </Formik>
  );
}

export default PopupBillingAddress;
