import React, { useState } from "react";
import { get } from "lodash";
import { Link, useNavigate, useParams } from "react-router-dom";
import { isEmail, isInt, isFloat } from "validator";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {FaEdit} from "react-icons/fa"

import { Container } from "../../style/GlobalStyles"
import { Form, ProfilePicture, IconUserCircle } from "./styled"
import axios from "../../services/axios";
import * as action from "../../store/modules/auth/action"


function Aluno() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [foto, setFoto] = useState("");

  React.useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, "Fotos[0].url", "");
        setFoto(Foto)
        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
      } catch (err) {
        const status = get(err, "response.status", 0);
        const errors = get(err, "response.data.errors", []);

        if (status === 400) errors.map(error => toast.error(error));
        navigate("/");
      }
    }
    getData();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (nome.length < 3 || nome.length > 250) {
      formErrors = true;
      toast.error("Nome deve ter entre 3 e 250 caracteres");
    }
    if (sobrenome.length < 3 || sobrenome.length > 250) {
      formErrors = true;
      toast.error("Sobrenome deve ter entre 3 e 250 caracteres");
    }
    if (!isEmail(email)) {
      formErrors = true;
      toast.error("Email inválido!");
    }
    if (!isInt(idade)) {
      formErrors = true;
      toast.error("Idade precisa ser um número inteiro!");
    }
    if (!isFloat(peso)) {
      formErrors = true;
      toast.error("Peso precisa ser um número inteiro ou decimal");
    }
    if (!isFloat(altura)) {
      formErrors = true;
      toast.error("Altura precisa ser um número inteiro ou decimal");
    }

    if (formErrors) return;

    try {
      if (id) {
        await axios.put(`/alunos/${id}`, { nome, sobrenome, email, idade, peso, altura });
        toast.success("Aluno(a) editado(a) com sucesso!");
      } else {
        const {data} = await axios.post(`/alunos`, { nome, sobrenome, email, idade, peso, altura });
        toast.success("Aluno(a) criado(a) com sucesso!");
        navigate(`/aluno/${data.id}/edit`)
      }
    } catch (err) {
      const status = get(err, "response.status", 0);
      const data = get(err, "response.date", {});
      const errors = get(data, "errors", []);

      if (errors.length > 0){
        errors.map(error => toast.error(error));
      } else{
        toast.error("Erro desconhecido!");
      }

      if(status === 400){
        dispatch(action.loginFailure());
      }
    }
  }

  return (
    <Container>
      <h1>{id ? ("Editar Aluno") : ("Novo Aluno")}</h1>

      {id && (
        <ProfilePicture>
          {foto ? (
            <img src={foto} alt={nome}/>
          ) : (
            <IconUserCircle size={180}/>
          )}
          <Link to={`/fotos/${id}`}>
            <FaEdit size={24}></FaEdit>
          </Link>
        </ProfilePicture>
      )}

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
        <label htmlFor="sobrenome">
          Sobrenome:
          <input
            id="sobrenome"
            type="text"
            value={sobrenome}
            onChange={e => setSobrenome(e.target.value)}
            placeholder="Digite seu sobrenome" />
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
        <label htmlFor="idade">
          Idade:
          <input
            id="idade"
            type="number"
            value={idade}
            onChange={e => setIdade(e.target.value)}
            placeholder="Digite sua idade" />
        </label>
        <label htmlFor="peso">
          Peso:
          <input
            id="peso"
            type="number"
            value={peso}
            onChange={e => setPeso(e.target.value)}
            placeholder="Digite seu peso" />
        </label>
        <label htmlFor="altura">
          Altura:
          <input
            id="altura"
            type="number"
            value={altura}
            onChange={e => setAltura(e.target.value)}
            placeholder="Digite sua altura" />
        </label>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

export default Aluno;