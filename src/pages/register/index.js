import React, { useState } from "react";

import {isEmail} from "validator"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { Form } from "./styled";
import { Container } from "../../style/GlobalStyles"
import Axios from "../../services/Axios"
import { get } from "lodash";

function Register() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if(nome.length < 3 || nome.length > 250){
      formErrors = true;
      toast.error("Nome deve ter entre 3 e 250 caracteres");
    }
    if(!isEmail(email)){
      formErrors = true;
      toast.error("Email inválido!");
    }
    if(password.length < 6 || password.length > 50){
      formErrors = true;
      toast.error("Nome deve ter entre 6 e 50 caracteres");
    }

    if(formErrors) return;

    try{
      await Axios.post("/users", {
        nome,
        email,
        password,
      });

      toast.success("Conta cadastrada com sucesso!");
      navigate("/login")
    } catch(e){
      const errors = get(e, "response.data.errors", []);
      errors.map(error => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Crie sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome: 
          <input 
            id="nome"
            type="text" 
            value={nome} 
            onChange={e => setNome(e.target.value)} 
            placeholder="Digite seu nome"/>
        </label>
        <label htmlFor="email">
          Email: 
          <input 
            id="email"
            type="text" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="Digite seu email"/>
        </label>
        <label htmlFor="password">
          Senha: 
          <input 
            id="password" 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="Digite sua senha"/>
        </label>

        <button type="submit">Criar sua conta</button>
      </Form>
    </Container>
  );
}

export default Register;