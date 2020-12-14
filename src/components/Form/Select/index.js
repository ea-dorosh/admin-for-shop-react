import React from 'react';
import Select from 'react-select';
import './index.scss';
import {selectStyle} from 'components/Form/Select/style';

const SelectComponent = ({options, labelText, field, handleCheckbox, form, width}) => {
  return (
    <div className={`select-box${width ? ' width' : ''}`}>
      <span className='select-label'>{labelText}</span>
      <Select
        options={options}
        styles={selectStyle}
        onChange={(option) => {
          if (handleCheckbox) {
            handleCheckbox(form);
          }
          form.setFieldValue(field.name, option);
        }}
        value={options ? options.find((option) => option.id === field.value.id) : ''}
      />
    </div>
  );
};

export default SelectComponent;
