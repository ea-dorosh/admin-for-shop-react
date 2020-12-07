import React from 'react';
import 'components/ControlPanel/UI/ProductName/index.scss';

function ProductName(props) {
  const {name, category} = props;

  return (
    <div className='product-name-box'>
      <span className='product-name-box__name'>{name}</span>
      <span className='product-name-box__category'>{category}</span>
    </div>
  );
}

export default ProductName;
