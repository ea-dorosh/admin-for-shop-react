import React from "react";
import Account from "components/ControlPanel/Header/Account";
import Logo from "components/ControlPanel/Header/Logo"
import "./index.scss"


function Header() {
    return (
        <header className={'header'}>
            <Logo/>
            <Account/>
        </header>
    );
}

export default Header;
