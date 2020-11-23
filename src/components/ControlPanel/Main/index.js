import React from "react";
import "./index.scss"


function Page(props) {
    const {children} = props;

    return (
        <div className={'page'}>
                {children}
        </div>
    );
}

export default Page;
