import React from "react";
import axios from 'axios'
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./utils/routes";

axios.defaults.baseURL = 'Put API URL here'
const hist = createBrowserHistory();

export default ()=> (
    <Router basename={'/'} history={hist}>
    <div>
      <Switch>
      {routes.map((route,index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={(props =>{
              return(
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />  
        );
      })}
      </Switch>
    </div>
  </Router>
  );

