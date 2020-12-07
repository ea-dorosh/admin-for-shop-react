import React from 'react';
import './index.scss';
import {useDispatch} from 'react-redux';

const TabItem = (props) => {
  const {title, isActive, filterHandle} = props;
  const dispatch = useDispatch();

  return (
    <div
      className={`tab__item${isActive ? ` active` : ''}`}
      onClick={() => {
        dispatch(filterHandle(title));
      }}>
      {title}
    </div>
  );
};

export default TabItem;
