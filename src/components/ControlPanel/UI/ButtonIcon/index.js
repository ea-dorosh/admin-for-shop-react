import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const ButtonIcon = ({handler, buttonText, buttonIcon}) => (
  <button className='button-icon' onClick={handler}>
   <img src={buttonIcon} alt={buttonText} className='button-icon__img' />
    {buttonText}
  </button>
);

ButtonIcon.propTypes = {
  handler: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string.isRequired,
};

export default ButtonIcon;
