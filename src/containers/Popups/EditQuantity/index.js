import React from 'react';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from 'actions/popups';
import PopupForm from 'components/ControlPanel/Popup/PopupForm';
import InputText from 'components/Form/InputText';
import {Field, FieldArray, Form, Formik} from 'formik';
import {getActiveProduct} from 'reducer/products/selector';

const PopupEditQuantity = () => {
  const dispatch = useDispatch();
  const {shops} = useSelector((state) => getActiveProduct(state));

  const submitHandler = (values, {setSubmitting}) => {
    dispatch(ActionCreator.closePopup());
    setTimeout(() => {
      const newData = [];
      values.shops.forEach((shop, index) => (shop !== shops[index] ? newData.push(shop) : null));
      alert(JSON.stringify(newData, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik initialValues={{shops: shops}} onSubmit={submitHandler}>
      <Form>
        <Popup
          title='Edit Quantity'
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
              <FieldArray
                name='shops'
                render={() =>
                  shops.map((shop, index) => (
                    <Field key={index} name={`shops[${index}].quantity`} component={InputText} labelText={shop.name} />
                  ))
                }
              />
            </PopupForm>
          </div>
        </Popup>
      </Form>
    </Formik>
  );
};

export default PopupEditQuantity;
