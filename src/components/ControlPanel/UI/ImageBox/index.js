import React from 'react';
import 'components/ControlPanel/UI/ImageBox/index.scss';

function ImageBox(props) {
  const {img} = props;

  return (
    <div className='image-box'>
      <img src={img} alt='' />
    </div>
  );
}

export default ImageBox;
