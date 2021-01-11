import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import InputText from 'components/Form/InputText';
import {ActionCreator} from 'actions/popups';
import PopupForm from 'components/ControlPanel/Popup/PopupForm';
import {getPickUpData} from 'reducer/orders/selector';
import {Field, Form, Formik} from 'formik';

const PopupTimeOfIssue = () => {
  const dispatch = useDispatch();
  const pickUpData = useSelector((state) => getPickUpData(state));

  return (
    <Formik
      initialValues={pickUpData}
      onSubmit={(values, {setSubmitting}) => {
        dispatch(ActionCreator.closePopup());
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      <Form>
        <Popup
          title='Time of issue'
          width='654px'
          firstButton={
            <Button marginRight='20px' handler={() => dispatch(ActionCreator.closePopup())}>
              Cancel
            </Button>
          }
          secondButton={
            <Button fill type='submit'>
              Save
            </Button>
          }
          closeBtnHandler={() => dispatch(ActionCreator.closePopup())}>
          <div className='popup__content'>
            <PopupForm>
              <Field name='date' component={InputText} labelText='Date' />
              <Field name='time' component={InputText} labelText='Time' />
            </PopupForm>
          </div>
        </Popup>
      </Form>
    </Formik>
  );
};

export default PopupTimeOfIssue;
