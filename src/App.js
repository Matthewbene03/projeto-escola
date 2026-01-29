/*
Componente raiz da aplicação.
Define a estrutura geral e carrega as rotas principais.
*/

import React from "react";

import { Provider } from "react-redux";
import { Router } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { PersistGate } from "redux-persist/integration/react"

import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes/index";
import History from "./services/History";
import store, {persistor} from "./store";

  function App() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={History}>
            <Header />
            <Routes />
            <GlobalStyles />
            <ToastContainer autoClose={5000} className="toast-container" />
          </Router>
        </PersistGate>
      </Provider>
    );
  }

export default App;
