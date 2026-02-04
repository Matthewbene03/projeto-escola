import React from "react";
import { get } from "lodash";
import { FaUserCircle, FaEdit, FaWindowClose } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

import { Container } from "../../style/GlobalStyles"
import axios from "../../services/axios";
import { AlunoContainer, ProfilePicture } from "./styled";
import { toast } from "react-toastify";

function Alunos() {
  const [alunos, setAlunos] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => { //serve para executar efeitos colaterais em um componente React. Qualquer coisa que não seja apenas renderizar JSX, por exemplo: buscar dados numa API, adicionar event listeners, manipular localStorage, redirecionar página, executar código quando o componente carrega
    async function getData() {
      const response = await axios.get("/alunos");
      setAlunos(response.data);
    }

    getData();
  }, []);

  const handleDelete = async (e, id, index) => {
    e.preventDefault();

    try {
      await axios.delete(`/alunos/${id}`)
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos)
      toast.success("Aluno excluído com sucesso");
      navigate("/")
    } catch (err) {
      const status = get(err, "response.status", 0);

      if (status === 400) {
        toast.error("Você precisa fazer login")
      } else {
        toast.error("Ocorreu um erro ao excluir aluno")
      }

      console.log(err.response?.data);
      console.log(err.response?.status);
    }
  }


  return (
    <Container>
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={aluno.id}>
            {get(aluno, "Fotos[0].url", false) ? (
              <ProfilePicture>
                <img src={aluno.Fotos[0].url} alt=""></img>
              </ProfilePicture>
            ) : (
              <FaUserCircle size={36} />
            )}

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit className="FaEdit" size={16} />
            </Link>

            <FaWindowClose
              className="FaDelete"
              size={16}
              cursor="pointer"
              onClick={e => handleDelete(e, aluno.id, index)}
            />
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}

export default Alunos;