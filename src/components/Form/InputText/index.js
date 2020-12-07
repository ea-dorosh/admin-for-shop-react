import React from 'react';
import './index.scss';

function InputText(props) {
  const {labelText, value} = props;

  return (
    <label className={'input-box'}>
      <span className='input-label'>{labelText}</span>
      <input className='input-text' defaultValue={value} />
    </label>
  );
}

export default InputText;
