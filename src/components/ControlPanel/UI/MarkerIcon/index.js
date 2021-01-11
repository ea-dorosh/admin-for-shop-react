import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const MarkerIcon = ({type}) => <span className={`marker-icon marker-icon--${type}`} />;

MarkerIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MarkerIcon;
