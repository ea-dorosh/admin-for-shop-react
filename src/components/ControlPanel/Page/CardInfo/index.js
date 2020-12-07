import React from 'react';
import './index.scss';
import EditButton from 'components/ControlPanel/UI/EditButton';

function CardInfo(props) {
  const {editButtonHandler, title, children, bold} = props;
  return (
    <div className='card-info-block'>
      <h3 className={`card-info-title ${bold ? 'card-info-title--bold' : ''}`}>{title}</h3>
      {children}

      {editButtonHandler && (
        <div className='detail-button-wrapper'>
          <EditButton handler={editButtonHandler} />
        </div>
      )}
    </div>
  );
}

export default CardInfo;
