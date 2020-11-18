import React from "react";
import "./index.scss"

const TabFilterItem = props => {

  const {title, isActive} = props;

  return (
      <div className={`tab-filter__item ${isActive ? `active` : null}`}>{title}</div>
  )};

export default TabFilterItem;
