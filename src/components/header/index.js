import React from "react";
import './index.css';
import Logo from "../logo";

function Header() {
    return (
        <header className={'header'}>
            <Logo/>
            <div className={'account'}>
                <div className={'account__img-wrapper'}>

                </div>
            </div>
        </header>
    );
}

export default Header;
