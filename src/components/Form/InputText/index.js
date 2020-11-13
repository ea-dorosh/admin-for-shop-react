import React from "react";
import "./index.css"


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
