import React from "react";

import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes/index";
import {Router} from "react-router-dom"
import History from "./services/History";
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <Router history = {History}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={5000} className="toast-container"/>
    </Router>
  );
}

export default App;
