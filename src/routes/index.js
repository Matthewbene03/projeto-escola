/*
Define todas as rotas da aplicação usando React Router.
Controla quais páginas são exibidas conforme a URL.
*/

import React from "react";
import {Switch } from "react-router-dom";
import MyRoute from "./MyRoute"

import Login from "../pages/login/index";
import Page404 from "../pages/Pages404";

function Routes() { //Switch serve para escolher qual rota vai ser chamada. Route é a rota
  return (
      <Switch> 
        <MyRoute exact path="/" component={Login}/>
        <MyRoute path="*" component={Page404}/>
      </Switch>
  );
}


export default Routes;