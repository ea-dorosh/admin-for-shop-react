import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Textarea = ({field, form, labelText, width, ...props}) => (
  <label className='textarea-box'>
    <span className='textarea-label'>{labelText}</span>
    <textarea
      className='textarea-text'
      {...field}
      {...props}
      rows='10'
      onChange={(evt) => {
        form.handleChange(evt);
      }}
    />
  </label>
);

Textarea.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  width: PropTypes.bool,
};

export default Textarea;
