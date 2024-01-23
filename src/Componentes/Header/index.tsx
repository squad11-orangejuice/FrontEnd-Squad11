import { HeaderContainer, Tab, TabsContainer, LeftContainer, RightContainer, UserContainer, NotificacaoContainer } from "./styles";
import LogoOrange from "../../assets/LogoOrange.png";
import ImageUser from "../../assets/ImageUser.png";
import iconNotificacao from "../../assets/iconNotificacao.svg"

export function Header() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <img src={LogoOrange} />
        <TabsContainer>
          <Tab>Meus Projetos</Tab>
          <Tab>Descobrir</Tab>
        </TabsContainer>
      </LeftContainer>
      <RightContainer>
        <UserContainer>
          <img src={ImageUser} alt="Foto do usuário" />
        </UserContainer>
        <NotificacaoContainer>
          <img src={iconNotificacao} />
        </NotificacaoContainer>
      </RightContainer>
    </HeaderContainer>
  )
}