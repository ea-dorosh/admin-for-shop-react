import React from "react";
import "./index.css"
import Header from "../../../components/ControlPanel/Header";
import Navigation from "../../../components/ControlPanel/Navigation";
import Page from "../../../components/ControlPanel/Page";
import SalesWidget from "../../../components/Pages/Dashboard/SalesWidget";


function Dashboard() {

    return (
        <>
            <Header/>
            <Navigation/>
            <Page title={'Dashboard'}>
                <div className='dashboard-page__top-wrapper'>
                    <h3 className='dashboard-page__top-title'>Daily Sales</h3>
                    <div className='dashboard-page__sales'>
                        <SalesWidget
                            total
                            name={'AVS1'}
                            amount={'1315.21'}
                        />
                        <SalesWidget
                            name={'AVS1'}
                            amount={'135.21'}
                        />
                        <SalesWidget
                            name={'AVS1'}
                            amount={'735.21'}
                        />
                    </div>
                </div>
            </Page>
        </>
    );
}

export default Dashboard;
