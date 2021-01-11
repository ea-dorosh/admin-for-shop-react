import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const InputSearch = ({labelText, field, form, ...props}) => (
  <label className='input-search-box'>
    <input
      type='search'
      className='input-search-text'
      placeholder={labelText}
      {...field}
      {...props}
      onChange={(evt) => form.handleChange(evt)}
    />
  </label>
);

InputSearch.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default InputSearch;
