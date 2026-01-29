/*
Configuração central da store do Redux.
Aqui a store é criada, os reducers são registrados e os middlewares (como saga e persist) são aplicados.

Aqui:
- a store Redux é criada
- os reducers são conectados
- os middlewares (Saga e Persist) são aplicados
*/


// Função do redux-persist responsável por criar o "persistor", que controla salvar e restaurar o estado no storage do navegador
import { persistStore } from "redux-persist";

// createStore → cria a store Redux (forma clássica)
// applyMiddleware → permite adicionar middlewares à store
import { createStore, applyMiddleware } from "redux";

// Middleware responsável por lidar com efeitos colaterais como chamadas à API, delays, lógica assíncrona, etc.
import createSagaMiddleware from "redux-saga";

// Função que envolve os reducers com a configuração do redux-persist. Define quais partes do estado serão persistidas
import persistedReducers from "./modules/reduxPersist";

// Reducer raiz que combina todos os reducers da aplicação.Cada reducer controla uma parte do estado global
import rootReducer from "./modules/rootReducer";

// Saga raiz que junta todas as sagas do projeto. É o ponto inicial de execução das sagas
import rootSaga from "./modules/rootSagas";

// Criação da instância do middleware de saga
const sagaMiddleware = createSagaMiddleware();

// Criação da store Redux
// 1º parâmetro: reducers (envolvidos pelo redux-persist)
// 2º parâmetro: middlewares aplicados à store
const store = createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware)
);

// Inicia a execução das sagas
// A partir daqui, as sagas começam a "escutar" as actions disparadas
sagaMiddleware.run(rootSaga);

// Cria o persistor. Ele controla quando o estado será salvo e restaurado
// Normalmente usado junto com <PersistGate />
export const persistor = persistStore(store);

// Exporta a store para ser usada no <Provider>. Isso permite que toda a aplicação acesse o estado global
export default store;
