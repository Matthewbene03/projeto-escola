import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {isEmail} from "validator"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { Container } from "../../style/GlobalStyles"
import { Form } from "./styled"
import * as actions from "../../store/modules/auth/action"


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if(!isEmail(email)){
      formErrors = true;
      toast.error("Email inválido!");
    }
    if(password.length < 6 || password.length > 50){
      formErrors = true;
      toast.error("Senha deve ter entre 6 e 50 caracteres");
    }

    if(formErrors) return;

    dispatch(actions.loginRequest({email, password}))
    navigate("/")
  }

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Digite seu email" />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Digite sua senha" />
        </label>

        <button type="submit">Fazer Login</button>
      </Form>
    </Container>
  );
}

export default Login;