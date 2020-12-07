import React from 'react';
import Popup from 'components/ControlPanel/Popup';
import Button from 'components/ControlPanel/UI/Button';
import {useDispatch} from 'react-redux';
import {closePopup} from 'actions/actions';
import SelectComponent from 'components/Form/Select';

const SHOPS = [
  {value: 'AVS1', label: 'AVS1'},
  {value: 'AVS2', label: 'AVS2'},
  {value: 'AVS3', label: 'AVS3'},
];

function PopupPickupAddress() {
  const dispatch = useDispatch();

  return (
    <Popup
      title='Edit shipping address'
      firstButton={
        <Button marginRight handler={() => dispatch(closePopup())}>
          Cancel
        </Button>
      }
      secondButton={<Button fill>Save</Button>}
      closeBtnHandler={() => dispatch(closePopup())}
      width={654}>
      <div className='popup__content'>
        <SelectComponent options={SHOPS} label='Select shop' defaultValue={SHOPS[0]} width />
      </div>
    </Popup>
  );
}

export default PopupPickupAddress;
