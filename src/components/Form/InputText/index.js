import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const InputText = ({field, form, labelText, handleCheckbox, width, ...props}) => (
  <label className='input-box'>
    <span className='input-label'>{labelText}</span>
    <input
      className={classNames('input-text', {width: width})}
      {...field}
      {...props}
      onChange={(evt) => {
        handleCheckbox && handleCheckbox(form);
        form.handleChange(evt);
      }}
    />
  </label>
);

InputText.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  handleCheckbox: PropTypes.func,
  width: PropTypes.bool,
};

export default InputText;
