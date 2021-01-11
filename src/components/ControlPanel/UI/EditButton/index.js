import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const EditButton = ({handler}) => (
  <button className='edit-button' onClick={handler}>
    edit
  </button>
);

EditButton.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default EditButton;
