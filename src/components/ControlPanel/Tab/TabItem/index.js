import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';

const TabItem = ({title, isActive, filterHandle}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={classNames('tab__item', {active: isActive})}
      onClick={() => {
        dispatch(filterHandle(title));
      }}>
      {title}
    </div>
  );
};

export default TabItem;

TabItem.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  filterHandle: PropTypes.func.isRequired,
};
