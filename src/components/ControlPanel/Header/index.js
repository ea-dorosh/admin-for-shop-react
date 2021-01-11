import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Header = ({children}) => <header className='header'>{children}</header>;

export default Header;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
