import React from 'react';
import './index.scss';
import {useDispatch, useSelector} from 'react-redux';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import InputText from 'components/Form/InputText';
import {ActionCreator} from 'actions/popups';
import {Field, Form, Formik} from 'formik';
import {getActiveCustomer} from 'reducer/customers/selector';
import InputCheckbox from 'components/Form/InputCheckbox';
import Textarea from 'components/Form/Textarea';

const PopupSendNotification = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => getActiveCustomer(state));

  const values = {
    ...customer,
    sms: false,
    email: false,
    topic: '',
    message: '',
  };

  return (
    <Formik
      initialValues={values}
      onSubmit={(values, {setSubmitting}) => {
        dispatch(ActionCreator.closePopup());
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      <Form>
        <Popup
          title='Send SMS / Email'
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
            <div className='notification-form'>
              <div className='notification-form__top-wrapper'>
                <div className='notification-form__info-wrapper'>
                  <div className='notification-form__info'>
                    <span>Recipient:</span>{' '}
                    <span className='notification-form__info--bold'>
                      {customer.firstName} {customer.lastName}
                    </span>
                  </div>
                  <div className='notification-form__info'>
                    <span>Email:</span> <span className='notification-form__info--bold'>{customer.email}</span>
                  </div>
                  <div className='notification-form__info'>
                    <span>Phone:</span> <span className='notification-form__info--bold'>{customer.phone}</span>
                  </div>
                </div>
                <div className='notification-form__checkboxes'>
                  <div className='notification-form__checkbox'>
                    <Field name='sms' component={InputCheckbox} marginBottom labelText='Email' />
                  </div>
                  <div className='notification-form__checkbox'>
                    <Field
                      name='email'
                      component={InputCheckbox}
                      className='notification-form__checkbox'
                      labelText='SMS'
                    />
                  </div>
                </div>
              </div>
              <div className='notification-form__bottom-wrapper'>
                <div className='notification-form__field-wrapper'>
                  <Field name='topic' component={InputText} width labelText='Topic' />
                </div>
                <Field name='message' component={Textarea} labelText='Message' />
              </div>
            </div>
          </div>
        </Popup>
      </Form>
    </Formik>
  );
};

export default PopupSendNotification;
