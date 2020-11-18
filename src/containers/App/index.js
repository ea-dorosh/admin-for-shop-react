import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./index.scss"
import {AppRoutes} from "../../constants/app_routes";
import Dashboard from "../Pages/Dashboard";
import AllOrders from "../Pages/Orders/AllOrders";


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={AppRoutes.DASHBOARD}>
            <div className={'app-wrapper'}>
              <Dashboard/>
            </div>
          </Route>
          <Route exact path={AppRoutes.ALL_ORDERS}>
            <div className={'app-wrapper'}>
              <AllOrders/>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>

  );
}

export default App;
