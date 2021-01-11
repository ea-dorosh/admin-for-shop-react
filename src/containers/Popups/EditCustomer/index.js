import React from 'react';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from 'actions/popups';
import PopupForm from 'components/ControlPanel/Popup/PopupForm';
import InputText from 'components/Form/InputText';
import {getCustomer} from 'reducer/orders/selector';
import {Field, Form, Formik} from 'formik';

const PopupEditCustomer = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => getCustomer(state));

  return (
    <Formik
      initialValues={customer}
      onSubmit={(values, {setSubmitting}) => {
        dispatch(ActionCreator.closePopup());
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      <Form>
        <Popup
          title='Edit Customer'
          firstButton={
            <Button marginRight='20px' handler={() => dispatch(ActionCreator.closePopup())}>
              Cancel
            </Button>
          }
          secondButton={
            <Button fill type='submit' handler={()=>{}}>
              Save
            </Button>
          }
          closeBtnHandler={() => dispatch(ActionCreator.closePopup())}>
          <div className='popup__content'>
            <PopupForm>
              <Field name='name' component={InputText} labelText='First Name' />
              <Field name='surName' component={InputText} labelText='Last Name' />
              <Field name='email' component={InputText} labelText='Email' />
              <Field name='tel' component={InputText} labelText='Phone' />
            </PopupForm>
          </div>
        </Popup>
      </Form>
    </Formik>
  );
};

export default PopupEditCustomer;
