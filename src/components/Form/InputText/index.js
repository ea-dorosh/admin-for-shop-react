import React from 'react';
import './index.scss';

function InputText({labelText, field, form, handleCheckbox, ...props}) {
  return (
    <label className={'input-box'}>
      <span className='input-label'>{labelText}</span>
      <input
        className='input-text'
        {...field}
        {...props}
        onChange={(evt) => {
          if (handleCheckbox) {
            handleCheckbox(form);
          }
          form.handleChange(evt);
        }}
      />
    </label>
  );
}

export default InputText;
