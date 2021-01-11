import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const InputCheckbox = ({field, form, labelText, onChange}) => (
  <label className='input-checkbox-label'>
    <span className='checkbox-icon' />
    <input
      className='input-checkbox'
      type='checkbox'
      checked={field.value}
      onChange={() => {
        onChange && onChange();
        form.setFieldValue(field.name, !field.value);
      }}
    />
    <span className='checkbox-indicator' />
    {labelText}
  </label>
);

InputCheckbox.propTypes = {
  field: PropTypes.shape({
    value: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default InputCheckbox;
