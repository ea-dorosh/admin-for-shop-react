import React from "react";
import "./index.scss"


function Header(props) {
  return (
      <header className={'header'}>
        {props.children}
      </header>
  );
}

export default Header;
