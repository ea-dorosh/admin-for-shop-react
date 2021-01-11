import React from 'react';
import Select from 'react-select';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {selectStyle} from 'components/Form/Select/style';

const SelectComponent = ({field, form, labelText, handleCheckbox, width, options}) => (
  <div className={classNames('select-box', {width: width})}>
    <span className='select-label'>{labelText}</span>
    <Select
      options={options}
      styles={selectStyle}
      onChange={(option) => {
        handleCheckbox && handleCheckbox(form);
        form.setFieldValue(field.name, option);
      }}
      value={options ? options.find((option) => option.id === field.value.id) : ''}
    />
  </div>
);

SelectComponent.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  handleCheckbox: PropTypes.func,
  width: PropTypes.bool,
  options: PropTypes.array.isRequired,
};

export default SelectComponent;
