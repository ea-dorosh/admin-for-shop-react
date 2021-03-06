import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const Page = ({children}) => <div className='page'>{children}</div>;

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
