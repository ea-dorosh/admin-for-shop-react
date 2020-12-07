import React from 'react';
import Select from 'react-select';
import './index.scss';
import {selectStyle} from 'components/Form/Select/style';

const SelectComponent = ({options, label, defaultValue, width}) => (
  <div className={`select-box${width ? ' width' : ''}`}>
    <span className='select-label'>{label}</span>
    <Select options={options} styles={selectStyle} defaultValue={defaultValue} />
  </div>
);

export default SelectComponent;
