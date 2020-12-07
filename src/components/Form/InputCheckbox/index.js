import React from 'react';
import './index.scss';

function InputCheckbox(props) {
  const {labelText} = props;

  return (
    <label className='input-checkbox-label'>
      <span className='checkbox-icon' />
      <input className='input-checkbox' type='checkbox' />
      <span className='checkbox-indicator' />
      {labelText}
    </label>
  );
}

export default InputCheckbox;
