import React from "react";
import "./index.css"
import Header from "./Header";
import InputText from "../../Form/InputText";
import Select from "../../Form/Select";
import {COUNTRIES} from "../../../constants/countries"


function Page() {
    return (
        <div className={'page'}>
            <div className={'page__header'}>
                <Header/>
            </div>
            <div className={'page__content'}>
                <InputText/>
                <Select options={COUNTRIES} label={'Country/Region'}/>
            </div>
        </div>
    );
}

export default Page;
