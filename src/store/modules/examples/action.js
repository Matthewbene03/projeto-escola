import * as types from "../types"

export function cliqueBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function cliqueBotaoSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESSS,
  };
}

export function cliqueBotaoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}