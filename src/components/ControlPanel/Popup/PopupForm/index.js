import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const PopupForm = ({children}) => <div className='popup-form'>{children}</div>;

PopupForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PopupForm;
