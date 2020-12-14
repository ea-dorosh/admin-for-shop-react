import React from 'react';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from 'actions/popups';
import SelectComponent from 'components/Form/Select';
import {Field, Form, Formik} from 'formik';
import {getPickUpData} from 'reducer/orders/selector';

const SHOPS = [
  {id: 1, value: 'AVS1', label: 'AVS1'},
  {id: 2, value: 'AVS2', label: 'AVS2'},
  {id: 3, value: 'AVS3', label: 'AVS3'},
];

function PopupPickupAddress() {
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
          title='Edit shipping address'
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
            <Field name='shop' component={SelectComponent} labelText='Select shop' options={SHOPS} width />
          </div>
        </Popup>
      </Form>
    </Formik>
  );
}

export default PopupPickupAddress;
