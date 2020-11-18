import React from "react";
import "./index.scss"

const TabItem = props => {

  const {title, isActive} = props;

  return (
      <div className={`tab__item ${isActive ? `active` : null}`}>{title}</div>
  )};

export default TabItem;
