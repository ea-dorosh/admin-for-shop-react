import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Tab = ({children}) => <div className='tab'>{children}</div>;

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tab;
