import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const ProductName = ({name, category}) => (
  <div className='product-name-box'>
    <span className='product-name-box__name'>{name}</span>
    <span className='product-name-box__category'>{category}</span>
  </div>
);

ProductName.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
};

export default ProductName;
