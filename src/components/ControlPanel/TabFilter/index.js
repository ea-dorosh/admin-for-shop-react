import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const TabFilter = ({children}) => <div className='tab-filter'>{children}</div>;

TabFilter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabFilter;
