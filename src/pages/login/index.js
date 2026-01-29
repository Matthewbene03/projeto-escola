import React from "react";

import { useDispatch } from "react-redux";

import { Title, Button} from "./styled"
import { Container } from "../../style/GlobalStyles"
import * as action from "../../store/modules/examples/action"


function Login() {
  const disparador = useDispatch();

  function handleClick(e){
    e.preventDefault();

    disparador(action.cliqueBotaoRequest());
  }

  return (
    <Container>
      <Title>Login</Title>
      <Button onClick={handleClick}>Enviar</Button>
    </Container>
  );
}

export default Login;