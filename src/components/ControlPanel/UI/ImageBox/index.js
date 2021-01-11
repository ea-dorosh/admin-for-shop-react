import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ImageBox = ({img, small}) => (
  <div className={classNames('image-box', {'image-box--small': small})}>
    <img src={img} alt='' />
  </div>
);

ImageBox.propTypes = {
  img: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default ImageBox;
