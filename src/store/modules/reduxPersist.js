/*
Configuração do redux-persist.
Permite salvar partes do estado global no storage do navegador.
*/

import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

export default function persistedReducers (reducers) {
  const persistedReducer = persistReducer({
    key: "CONSUMIR-API",
    storage,
    whitelist: ["auth"]
  }, reducers);

  return persistedReducer;
}