/*
Combina todos os reducers da aplicação em um único reducer raiz.
Cada reducer representa um pedaço do estado global.
*/

import {combineReducers} from "redux"

import reducer from "./examples/reducer";

export default combineReducers({
  myReducer: reducer,
});
