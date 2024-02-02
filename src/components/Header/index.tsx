import {
  HeaderContainer,
  TabsContainer,
  LeftContainer,
  RightContainer,
  StyledNavLink,
  Logo,
} from './styles'
import LogoOrange from '@/assets/LogoOrange.png'
import MenuButton from '../MenuButton'
import NotificationsIcon from '@mui/icons-material/Notifications'

import MenuUser from '../MenuUser'

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
        <MenuUser />

        <NotificationsIcon sx={{ fontSize: 24, color: '#FCFDFF' }} />
      </RightContainer>
    </HeaderContainer>
  )
}
