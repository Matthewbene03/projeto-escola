import React from "react";

import Login from "./pages/login";
import GlobalStyles from "./style/GlobalStyles";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
