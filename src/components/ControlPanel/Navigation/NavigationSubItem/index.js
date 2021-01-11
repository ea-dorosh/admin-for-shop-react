import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const NavigationSubItem = ({children}) => <li className='navigation-sub-item'>{children}</li>;

NavigationSubItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationSubItem;
