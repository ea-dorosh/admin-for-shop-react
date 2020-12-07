import React from 'react';
import './index.scss';

const Popup = (props) => {
  const {title, firstButton, secondButton, closeBtnHandler, width, children} = props;

  return (
    <div className={`popup`} style={{width: `${width}px`}}>
      <div className='popup__header'>{title}</div>
      <button className='popup__close-btn' onClick={closeBtnHandler} />
      {children}
      <div className='popup__buttons-wrapper'>
        {firstButton ? firstButton : null}
        {secondButton ? secondButton : null}
      </div>
    </div>
  );
};

export default Popup;
