import { Header } from "@/components/Header";
import ImageUser from "@/assets/ImageUser.png";
import { BotaoAdicionarProjeto, ContainerUser, UserInfo, UserLocal, UserNome, UserPerfil } from "./styles";

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

    </>
  )
}