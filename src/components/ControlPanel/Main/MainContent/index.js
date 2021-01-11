import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const MainContent = ({children}) => <div className='main-content'>{children}</div>;

export default MainContent;

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};
