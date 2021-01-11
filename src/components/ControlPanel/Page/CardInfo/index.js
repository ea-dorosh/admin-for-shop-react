import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import EditButton from 'components/ControlPanel/UI/EditButton';

const CardInfo = ({editButtonHandler, title, children, bold}) => (
  <div className='card-info-block'>
    <h3 className={classNames('card-info-title', {'card-info-title--bold': bold})}>{title}</h3>
    {children}

    {editButtonHandler && (
      <div className='detail-button-wrapper'>
        <EditButton handler={editButtonHandler} />
      </div>
    )}
  </div>
);

CardInfo.propTypes = {
  editButtonHandler: PropTypes.func,
  title: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CardInfo;
