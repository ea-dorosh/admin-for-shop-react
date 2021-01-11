import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const TableHead = ({children}) => <th className='table__head'>{children}</th>;

TableHead.propTypes = {
  colspan: PropTypes.number,
  children: PropTypes.node,
};

export default TableHead;
