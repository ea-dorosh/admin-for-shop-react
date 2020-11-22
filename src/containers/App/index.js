import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./index.scss"
import {AppRoutes} from "../../constants/app_routes";
import Dashboard from "../Pages/Dashboard";
import AllOrders from "../Pages/Orders/AllOrders";
import Order from "../Pages/Orders/Order";


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoutes.DASHBOARD}>
            <div className={'app-wrapper'}>
              <Dashboard/>
            </div>
          </Route>
          <Route exact path={AppRoutes.ALL_ORDERS.MAIN}>
            <div className={'app-wrapper'}>
              <AllOrders/>
            </div>
          </Route>
          <Route path='/orders/:id'>
            <div className={'app-wrapper'}>
              <Order/>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>

  );
}

export default App;
