/*
Combina todos os reducers da aplicação em um único reducer raiz.
Cada reducer representa um pedaço do estado global.
*/

import {combineReducers} from "redux"

import auth from "./auth/reducer";

export default combineReducers({
  auth,
});
