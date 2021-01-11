import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const MainHeader = ({children}) => <div className='main-header'>{children}</div>;

MainHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainHeader;
