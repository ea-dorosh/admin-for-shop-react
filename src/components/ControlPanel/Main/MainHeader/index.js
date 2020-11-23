import React from "react";
import "./index.scss"


function MainHeader(props) {
    return (
        <div className={'main-header'}>{props.children}</div>
    );
}

export default MainHeader;

