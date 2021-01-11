import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const TableRow = ({children}) => <tr>{children}</tr>;

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableRow;
