import React from "react";
import "./index.scss"
import {useDispatch} from "react-redux";
import {filterOrdersPayment} from "../../../../actions/actions";

const TabFilterItem = props => {
  const dispatch = useDispatch();

  const {title, isActive} = props;

  return (
      <div className={`tab-filter__item${isActive ? ' active' : ''}`}
           onClick={()=>{
             dispatch(filterOrdersPayment(title))
           }}>
        {title}</div>
  )};

export default TabFilterItem;
