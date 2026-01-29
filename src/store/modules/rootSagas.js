/*
Arquivo responsável por agrupar todas as sagas da aplicação.
As sagas controlam efeitos colaterais como chamadas à API.
*/

import {all} from "redux-saga/effects";
import exapleSagas from "./examples/sagas";

export default function* rootSaga(){
  return yield all([exapleSagas])
}