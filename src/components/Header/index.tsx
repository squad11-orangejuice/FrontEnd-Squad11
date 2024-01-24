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
          <div>
            <StyledNavLink to="/projetos">
              <Tab>Meus Projetos</Tab>
            </StyledNavLink>
          </div>
          <div>
            <StyledNavLink to="/descobrir">
              <Tab>Descobrir</Tab>
            </StyledNavLink>
          </div>
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
