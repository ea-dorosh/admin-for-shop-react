import React from "react";
import "./index.scss"


const labelText = 'Label Text';

function InputText() {
    return (
        <label className={'input-label'}>
            {labelText}
            <input className={'input-text'}/>
        </label>
    );
}

export default InputText;
