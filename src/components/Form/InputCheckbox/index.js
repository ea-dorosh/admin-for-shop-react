import React from 'react';
import './index.scss';

function InputCheckbox({field, form, labelText, resetValues}) {
  return (
    <label className='input-checkbox-label'>
      <span className='checkbox-icon' />
      <input
        className='input-checkbox'
        type='checkbox'
        checked={field.value}
        onChange={() => {
          if (resetValues) {
            form.handleReset();
          }
          form.setFieldValue(field.name, !field.value);
        }}
      />
      <span className='checkbox-indicator' />
      {labelText}
    </label>
  );
}

export default InputCheckbox;
