import React from "react";
import Account from "./Account";
import Logo from "./Logo"
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
