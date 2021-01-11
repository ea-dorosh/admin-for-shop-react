import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const NavigationSubList = ({children}) => <ul className='navigation-sub-list'>{children}</ul>;

NavigationSubList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationSubList;
