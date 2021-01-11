import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const NavigationItem = ({children}) => <li className='navigation-item'>{children}</li>;

NavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationItem;
