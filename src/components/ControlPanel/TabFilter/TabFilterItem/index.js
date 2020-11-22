import React from "react";
import "./index.scss"
import {useDispatch} from "react-redux";


const TabFilterItem = props => {
  const dispatch = useDispatch();

  const {title, isActive, filterHandle} = props;

  return (
      <div className={`tab-filter__item${isActive ? ' active' : ''}`}
           onClick={()=>{
             dispatch(filterHandle(title))
           }}>
        {title}</div>
  )};

export default TabFilterItem;
