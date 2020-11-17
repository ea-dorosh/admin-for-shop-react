import React from "react";
import "./index.scss"
import Header from "./Header";


function Page(props) {
    const {title, children} = props;

    return (
        <div className={'page'}>
            <div className={'page__header'}>
                <Header title={title}/>
            </div>
            <div className={'page__content'}>
                {children}
            </div>
        </div>
    );
}

export default Page;
