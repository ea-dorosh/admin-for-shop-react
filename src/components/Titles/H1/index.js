import React from "react";
import "./index.scss"


function TitleH1(props) {
    const {title} = props;

    return (<h1 className={'title-h1'}>{title}</h1>);
}

export default TitleH1;

