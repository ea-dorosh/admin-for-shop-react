import React from "react";
import "./index.css"
import Header from "../../components/Dashboard/Header"
import Navigation from "../../components/Dashboard/Navigation";
import Page from "../../components/Dashboard/Page";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navigation/>
            <Page/>
        </div>
    );
}

export default App;
