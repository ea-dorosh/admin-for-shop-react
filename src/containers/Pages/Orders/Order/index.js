import React from "react";
import "./index.scss"
import Header from "../../../../components/ControlPanel/Header";
import Navigation from "../../../../components/ControlPanel/Navigation";
import Page from "../../../../components/ControlPanel/Page";
import PageHeader from "../../../../components/ControlPanel/Page/PageHeader";


function Order() {

  return (
      <>
        <Header/>
        <Navigation/>
        <Page>
          <PageHeader title={'All Orders'}/>
          <div className={'page__content'}>
            <div className='dashboard-page__wrapper'>
              <div className='dashboard-page__top-inner'>

              </div>
              <div className='dashboard-page__filter-wrapper'>

              </div>
            </div>
          </div>
        </Page>
      </>
  );
}

export default Order;
