import { call, put, all, takeLatest} from "redux-saga/effects";

import * as action from "./action";
import * as types from "../types";

const requisicao = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, 2000)
});

function* exampleRequest(){
  try{
    yield call(requisicao);
    yield put(action.cliqueBotaoSuccess());
  } catch(e){
    yield put(action.cliqueBotaoFailure());
  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
]);