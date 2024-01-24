import {
  HeaderContainer,
  Tab,
  TabsContainer,
  LeftContainer,
  RightContainer,
  UserContainer,
  NotificacaoContainer,
  StyledNavLink,
} from './styles'
import LogoOrange from '@/assets/LogoOrange.png'
import ImageUser from '@/assets/ImageUser.png'
import iconNotificacao from '@/assets/iconNotificacao.svg'
import MenuButton from '../MenuButton'

export function Header() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <MenuButton />
        <img src={LogoOrange} alt="Orange logo" />
        <TabsContainer>
          <StyledNavLink to="/projetos">
            <Tab>Meus Projetos</Tab>
          </StyledNavLink>
          <StyledNavLink to="/descobrir">
            <Tab>Descobrir</Tab>
          </StyledNavLink>
        </TabsContainer>
      </LeftContainer>
      <RightContainer>
        <UserContainer>
          <img src={ImageUser} alt="Foto do usuário" />
        </UserContainer>
        <NotificacaoContainer>
          <img src={iconNotificacao} alt="Icone de notificação" />
        </NotificacaoContainer>
      </RightContainer>
    </HeaderContainer>
  )
}
