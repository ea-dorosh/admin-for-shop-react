import React from 'react';
import './index.scss';
import Popup from 'components/ControlPanel/Popup';
import {useDispatch, useSelector} from 'react-redux';
import {ActionCreator} from 'actions/popups';
import {getActiveProduct} from 'reducer/products/selector';
import ReturnListItem from 'containers/Popups/ReturnList/ReturnListItem';

const PopupReturnList = () => {
  const dispatch = useDispatch();
  const {shops} = useSelector((state) => getActiveProduct(state));

  return (
    <Popup withoutButtons title='Return list' closeBtnHandler={() => dispatch(ActionCreator.closePopup())}>
      <div className='return-list'>
        {shops.map(
          (shop) =>
            shop.refund &&
            shop.refund.map((refund, index) => {
              return (
                <React.Fragment key={index}>
                  {Array.from({length: refund.quantity}).map((_, idx) => {
                    return <ReturnListItem refund={refund} shop={shop.name} key={idx} />;
                  })}
                </React.Fragment>
              );
            })
        )}
      </div>
    </Popup>
  );
};

export default PopupReturnList;
