import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container } from "../../style/GlobalStyles"
import {Title, Form} from "./styled"
import axios from "../../services/axios"
import { get } from "lodash";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import * as action from "../../store/modules/auth/action"


function Fotos() {
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch()

  const [foto, setFoto] = useState("")

  React.useEffect(() => {
    const getDate = async () =>{
      try{
        const {data} = await axios.get(`/alunos/${id}`);
        setFoto(get(data, "Fotos[0].url", ""))

      } catch(err){
        toast.error("Erro ao obter a imagem!");
        console.log(err);
        navigate("/")
      }
    }

    getDate();
  }, [navigate, id]);

  const handleChange = async (e) =>{
    const file = e.target.files[0];
    const fileURL = URL.createObjectURL(file);
    setFoto(fileURL);

    const formData = new FormData();
    formData.append("aluno_id", id);
    formData.append("arquivo", file)

    try{
      await axios.post("/fotos", formData, {
        "Content-Type": "multipart/form-data"
      });
      toast.success("Foto enviada com sucesso!")
    } catch (err) {
      const {status} = get(err, "response", "");
      toast.error("Erro ao enviar foto!")

      if(status === 400) dispatch(action.loginFailure())
    }
  }

  return (
    <Container>
      <Title>Fotos</Title>

      <Form>
        <label htmlFor="foto">
          {foto ? (<img src={foto} alt={"Foto de usuário"}/>) : ("Selecionar")}
          <input type="file" id="foto" onChange={handleChange}/>
        </label>
        <button onClick={() => navigate(`/aluno/${id}/edit`)}>Voltar</button>
      </Form>
    </Container>
  );
}

export default Fotos;