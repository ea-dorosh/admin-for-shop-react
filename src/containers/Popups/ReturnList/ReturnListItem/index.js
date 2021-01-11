import React, {useState} from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import Button from 'components/ControlPanel/UI/Button';
import Spinner from 'components/ControlPanel/UI/Spinner';

const ReturnListItem = ({refund, shop}) => {
  let [isDisabled, setIsDisabled] = useState(false);
  let [isComplete, setIsComplete] = useState({status: false, action: ''});

  const handlerWriteOff = (order) => {
    setIsDisabled((isDisabled = true));
    console.log(order.checkout);

    setTimeout(() => {
      setIsComplete(() => {
        return {
          status: true,
          action: 'Item is written off',
        };
      });
      setIsDisabled((isDisabled = false));
    }, 1000);
  };

  const handlerAddToInventory = (order) => {
    setIsDisabled((isDisabled = true));
    console.log(order.checkout);

    setTimeout(() => {
      setIsComplete(() => {
        return {
          status: true,
          action: `Item is added to ${shop}`,
        };
      });
      setIsDisabled((isDisabled = false));
    }, 1000);
  };

  return (
    <div className='return-list__item'>
      <div className='return-list__spinner-wrapper'>{isDisabled && <Spinner />}</div>
      <div className={`return-list__item-wrapper ${isDisabled && 'disabled'}`}>
        <span className='return-list__item-name'>{refund.checkout}</span>
        <p className='return-list__item-text' title={refund.reason}>
          {refund.reason}
        </p>
        <div className='return-list__btn-wrapper'>
          {isComplete.status ? (
            <span className='return-list__complete'>{isComplete.action}</span>
          ) : (
            <>
              <Button marginRight='20px' color='red' handler={() => handlerWriteOff(refund)}>
                Write off
              </Button>
              <Button handler={() => handlerAddToInventory(refund)}>In inventory</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

ReturnListItem.propTypes = {
  refund: PropTypes.shape({
    checkout: PropTypes.string.isRequired,
    reason: PropTypes.string,
  }).isRequired,
  shop: PropTypes.string,
};

export default ReturnListItem;
