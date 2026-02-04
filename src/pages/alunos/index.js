import React from "react";
import { get } from "lodash";
import { FaUserCircle, FaEdit, FaWindowClose } from "react-icons/fa"
import { Link } from "react-router-dom"

import { Container } from "../../style/GlobalStyles"
import Axios from "../../services/Axios";
import { AlunoContainer, ProfilePicture } from "./styled";

function Alunos() {
  const [alunos, setAlunos] = React.useState([]);

  React.useEffect(() => { //serve para executar efeitos colaterais em um componente React. Qualquer coisa que não seja apenas renderizar JSX, por exemplo: buscar dados numa API, adicionar event listeners, manipular localStorage, redirecionar página, executar código quando o componente carrega
    async function getData() {
      const response = await Axios.get("/alunos");
      setAlunos(response.data);
    }

    getData();
  }, []);
  return (
    <Container>
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map(aluno => (
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

            <Link to={`aluno/${aluno.id}/edit`}>
              <FaEdit className="FaEdit" size={16}/>
            </Link>

            <Link to={`aluno/${aluno.id}/delete`}>
              <FaWindowClose className="FaDelete" size={16}/>
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}

export default Alunos;