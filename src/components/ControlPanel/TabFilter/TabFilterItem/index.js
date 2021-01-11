import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useDispatch} from 'react-redux';

const TabFilterItem = ({title, isActive, filterHandle}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={classNames('tab-filter__item', {active: isActive})}
      onClick={() => {
        dispatch(filterHandle(title));
      }}>
      {title}
    </div>
  );
};

TabFilterItem.propTypes = {
  filterHandle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default TabFilterItem;
