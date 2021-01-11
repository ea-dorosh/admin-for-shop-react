import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import ImageBox from 'components/ControlPanel/UI/ImageBox';

const ProductTitleBox = ({product, withOptions}) => {
  const {img, title, category, options} = product;

  return (
    <div className='product-title-box'>
      <ImageBox img={img} small />
      <div className='product-title-box__wrapper'>
        <span className='product-title-box__title'>{title}</span>
        <div className='product-title-box__text'>
          <span>{category}</span>
          {withOptions && options && Object.values(options).map((option, index) => <span key={index}>{option}</span>)}
        </div>
      </div>
    </div>
  );
};

ProductTitleBox.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    options: PropTypes.object,
  }).isRequired,
  withOptions: PropTypes.bool,
};

export default ProductTitleBox;
