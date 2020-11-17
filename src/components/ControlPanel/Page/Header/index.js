import React from "react";
import "./index.scss"


function Header(props) {
    const {title} = props;

    return (
        <h1 className={'page-header'}>{title}</h1>
    );
}

export default Header;
