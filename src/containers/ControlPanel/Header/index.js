import React from "react";
// import "./index.scss"
import Header from "components/ControlPanel/Header";
import Account from "components/ControlPanel/Header/Account";
import Logo from "components/ControlPanel/Header/Logo"


function HeaderContainer() {
  return (
      <Header>
        <Logo/>
        <Account/>
      </Header>
  )
}

export default HeaderContainer;
