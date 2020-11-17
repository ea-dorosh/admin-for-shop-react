import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./index.scss"
import Dashboard from "../Pages/Dashboard";



function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <div className={'app-wrapper'}>
              <Dashboard/>
            </div>
          </Route>
          <Route exact path='/all-orders'>
            <div className={'app-wrapper'}>
              <Dashboard/>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>

  );
}

export default App;
