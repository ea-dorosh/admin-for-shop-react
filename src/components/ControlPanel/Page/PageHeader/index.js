import React from "react";
import "./index.scss"


function PageHeader(props) {
    const {title} = props;

    return (
        <div className={'page__header'}>
            <h1 className={'page-header'}>{title}</h1>
        </div>
    );
}

export default PageHeader;

