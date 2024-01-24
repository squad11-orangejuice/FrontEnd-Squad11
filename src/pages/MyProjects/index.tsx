import { Header } from "@/components/Header";
import ImageUser from "@/assets/ImageUser.png";
import { BotaoAdicionarProjeto, ContainerUser, MyProjectsContainer, UserInfo, UserLocal, UserNome, UserPerfil } from "./styles";
import TextField from '@mui/material/TextField';
import { CardProject } from "@/components/CardProject";



export function MyProjects() {
  return (
    <>
      <Header />
      <ContainerUser>
        <UserPerfil>
          <img src={ImageUser} alt="Foto-perfil-usuário" />
        </UserPerfil>
        <UserInfo>
          <UserNome> Camila Soares</UserNome>
          <UserLocal> Brasil </UserLocal>
          <BotaoAdicionarProjeto><strong> Adicionar Projeto </strong>  </BotaoAdicionarProjeto>
        </UserInfo>
      </ContainerUser>

      <MyProjectsContainer>
        Meus projetos
        <TextField
          sx={{ width: '100%' }}
          id="outlined-helperText"
          label="Buscar tags" />
      </MyProjectsContainer>

      <CardProject />
    </>
  )
}