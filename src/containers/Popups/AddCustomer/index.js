import React from 'react';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import {useDispatch} from 'react-redux';
import {ActionCreator} from 'actions/popups';
import {Operation} from 'actions/customers';
import PopupForm from 'components/ControlPanel/Popup/PopupForm';
import InputText from 'components/Form/InputText';
import {Field, Form, Formik} from 'formik';

const PopupAddCustomer = () => {
  const dispatch = useDispatch();
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        dispatch(ActionCreator.closePopup());
        dispatch(Operation.addCustomer(values));
      }}>
      <Form>
        <Popup
          title='Add Customer'
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
            <PopupForm>
              <Field name='firstName' component={InputText} labelText='First Name' />
              <Field name='lastName' component={InputText} labelText='Last Name' />
              <Field name='email' component={InputText} labelText='Email' />
              <Field name='phone' component={InputText} labelText='Phone' />
            </PopupForm>
          </div>
        </Popup>
      </Form>
    </Formik>
  );
};

export default PopupAddCustomer;
