import React from "react";
import "./index.css"
import Header from "../../components/Dashboard/Header"
import Navigation from "../../components/Dashboard/Navigation";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navigation/>
        </div>
    );
}

export default App;
