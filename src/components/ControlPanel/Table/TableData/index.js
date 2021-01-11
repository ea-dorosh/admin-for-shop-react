import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const TableData = ({children, colspan}) => (
  <td className='table__data' colSpan={`${colspan ? colspan : ''}`}>
    {children}
  </td>
);

TableData.propTypes = {
  colspan: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node, PropTypes.any]),
};

export default TableData;
