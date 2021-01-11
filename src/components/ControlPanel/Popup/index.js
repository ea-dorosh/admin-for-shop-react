import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Popup = ({title, firstButton, secondButton, closeBtnHandler, width, withoutButtons, children}) => (
  <>
    <div className='popup-overlay' onClick={closeBtnHandler} />
    <div className='popup' style={{width: width}}>
      <div className='popup__header'>{title}</div>
      <button className='popup__close-btn' onClick={closeBtnHandler} />
      {children}
      {withoutButtons || (
        <div className='popup__buttons-wrapper'>
          {firstButton && firstButton}
          {secondButton && secondButton}
        </div>
      )}
    </div>
  </>
);

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  firstButton: PropTypes.node,
  secondButton: PropTypes.node,
  closeBtnHandler: PropTypes.func.isRequired,
  width: PropTypes.string,
  withoutButtons: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Popup;
