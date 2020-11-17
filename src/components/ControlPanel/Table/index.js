import React from "react";
import "./index.scss"

const Table = props => {
  const {tableType} = props;

  return (
      <table className={`table ${tableType ? tableType : null}`}>{props.children}</table>
  )};

export default Table;
