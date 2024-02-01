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
import MenuButton from '../MenuButton'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useAuth } from '@/hooks/useAuth'
import { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import { stringAvatar } from '@/functions/stringAvatar'

export function Header() {
  const [urlImage, setUrlImage] = useState<string>('')

  const { user } = useAuth()

  useEffect(() => {
    if (user?.avatar) {
      setUrlImage(user?.avatar)
    }
  }, [user])

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
        {urlImage ? (
          <UserImgContainer src={user?.avatar} alt="Foto do usuário" />
        ) : (
          <Avatar
            {...stringAvatar(`${user?.given_name} ${user?.family_name}`)}
            sizes="40"
          />
        )}

        <NotificationsIcon sx={{ fontSize: 24, color: '#FCFDFF' }} />
      </RightContainer>
    </HeaderContainer>
  )
}
