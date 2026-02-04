import React, { useState } from "react";

import { isEmail } from "validator"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Form } from "./styled";
import { Container } from "../../style/GlobalStyles"
import * as action from "../../store/modules/auth/action"

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.user.email);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  React.useEffect(() => {
    if (!id) return;
    setNome(nomeStored);
    setEmail(emailStored)
  }, [emailStored, id, nomeStored])

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 250) {
      formErrors = true;
      toast.error("Nome deve ter entre 3 e 250 caracteres");
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error("Email inválido!");
    }
    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error("Nome deve ter entre 6 e 50 caracteres");
    }

    if (formErrors) return;

    dispatch(action.registerRequest({ nome, email, password, id }));
    navigate("/login");
  }

  return (
    <Container>
      <h1>{id ? "Editar dados" : "Crie sua conta"}</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Digite seu nome" />
        </label>
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

        <button type="submit">{id ? "Salvar dados" : "Criar sua conta"}</button>
      </Form>
    </Container>
  );
}

export default Register;