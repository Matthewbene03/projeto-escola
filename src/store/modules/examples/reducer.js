import * as types from "../types"

const initialState = {
  botaoClicado: false
}

export default function reducer (state = initialState, action) {
  switch (action.type){
    case types.BOTAO_CLICADO_SUCCESSS:
      const newState = {...state};
      newState.botaoClicado = !newState.botaoClicado;
      console.log("Deu certo! Sucesso.")
      return newState;
    case types.BOTAO_CLICADO_REQUEST:
      console.log("Estou esperando...")
      return state;
      case types.BOTAO_CLICADO_FAILURE:
        console.log("Deu ruim =(")
      return state;
      
      default:
        return state;
  }
};