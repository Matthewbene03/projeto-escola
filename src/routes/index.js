import React from "react";
import {Switch } from "react-router-dom";
import MyRoute from "./MyRoute"

import Login from "../pages/login/index";
import Page404 from "../pages/Pages404";

function Routes() { //Switch serve para escolher qual rota vai ser chamada. Route é a rota
  return (
      <Switch> 
        <MyRoute exact path="/" component={Login} isClosed={true}/>
        <MyRoute path="*" component={Page404}/>
      </Switch>
  );
}


export default Routes;