import {
  HeaderContainer,
  TabsContainer,
  LeftContainer,
  RightContainer,
  StyledNavLink,
  Logo,
  UserImgContainer,
} from './styles'
import LogoOrange from '@/assets/LogoOrange.png'
import ImageUser from '@/assets/ImageUser.png'
import MenuButton from '../MenuButton'
import NotificationsIcon from '@mui/icons-material/Notifications'

export function Header() {
  return (
    <HeaderContainer>
      <LeftContainer>
        <MenuButton />
        <TabsContainer>
          <Logo src={LogoOrange} alt="Orange logo" />
          <StyledNavLink to="/projetos">Meus Projetos</StyledNavLink>
          <StyledNavLink to="/descobrir">Descobrir</StyledNavLink>
        </TabsContainer>
      </LeftContainer>
      <RightContainer>
        <UserImgContainer src={ImageUser} alt="Foto do usuário" />
        <NotificationsIcon sx={{ fontSize: 24, color: '#FCFDFF' }} />
      </RightContainer>
    </HeaderContainer>
  )
}
