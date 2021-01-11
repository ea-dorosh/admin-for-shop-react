import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Table = ({tableType, children}) => (
  <table className={classNames('table', {[tableType]: tableType})}>{children}</table>
);

Table.propTypes = {
  tableType: PropTypes.string,
  children: PropTypes.node,
};

export default Table;
