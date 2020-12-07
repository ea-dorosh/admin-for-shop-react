import React from 'react';
import './index.scss';

const TableData = (props) => {
  const {children, colspan} = props;

  return (
    <td className='table__data' colSpan={`${colspan ? colspan : ''}`}>
      {children}
    </td>
  );
};

export default TableData;
