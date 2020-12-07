export const selectStyle = {
  option: (provided, state) => ({
    ...provided,
    borderRadius: 0,
  }),
  control: (provided, state) => ({
    ...provided,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: state.isFocused ? '#428bff' : '#EBEBEB',
    borderRadius: 0,
    boxShadow: 'none',
    transition: 'border-color .2s ease;',
    '&:hover': {
      borderColor: '#428bff',
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: '6px 15px',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    marginLeft: '0',
    marginRight: '0',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
};
