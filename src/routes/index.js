// /*
// Define todas as rotas da aplicação usando React Router.
// Controla quais páginas são exibidas conforme a URL.
// */

// import React from "react";
// import {Switch } from "react-router-dom";
// import MyRoute from "./MyRoute"

// import Login from "../pages/login/index";
// import Aluno from "../pages/aluno/index";
// import Alunos from "../pages/alunos/index";
// import Register from "../pages/register/index";
// import Fotos from "../pages/fotos/index";
// import Page404 from "../pages/Pages404";

// function Routes() { //Switch serve para escolher qual rota vai ser chamada. Route é a rota
//   return (
//       <Switch> 
//         <MyRoute exact path="/" component={Alunos} isClosed={false}/>
//         <MyRoute exact path="/aluno/:id" component={Aluno} isClosed={true}/>
//         <MyRoute exact path="/aluno/" component={Aluno} isClosed={true}/>
//         <MyRoute exact path="/fotos/:id" component={Fotos} isClosed={true}/>
//         <MyRoute exact path="/login" component={Login} isClosed={false}/>
//         <MyRoute exact path="/register" component={Register} isClosed={false}/>
//         <MyRoute path="*" component={Page404}/>
//       </Switch>
//   );
// }


// export default Routes;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Register from "../pages/register";
import Alunos from "../pages/alunos";
import Aluno from "../pages/aluno";
import Fotos from "../pages/fotos";
import Page404 from "../pages/Pages404";

export default function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Alunos />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/aluno/:id" element={<Aluno />} />
      <Route exact path="/aluno/" element={<Aluno />} />
      <Route exact path="/fotos/:id" element={<Fotos />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
