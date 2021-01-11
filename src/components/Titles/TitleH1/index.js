import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const TitleH1 = ({title}) => <h1 className='title-h1'>{title}</h1>;

TitleH1.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleH1;
