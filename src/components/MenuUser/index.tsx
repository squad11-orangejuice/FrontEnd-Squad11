import { useEffect, useState } from 'react'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@mui/material'
import { UserImgContainer } from './styles'
import { stringAvatar } from '@/functions/stringAvatar'

const MenuUser = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [urlImage, setUrlImage] = useState<string>('')
  const { user, logout } = useAuth()

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClickLogout = () => {
    logout()
    setAnchorEl(null)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    if (user?.avatar) {
      setUrlImage(user?.avatar)
    }
  }, [user?.avatar])

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: 'white',
          minHeight: 0,
          minWidth: 0,
          padding: 0,
        }}
      >
        {urlImage ? (
          <UserImgContainer src={urlImage} alt="Foto do usuário" />
        ) : (
          <Avatar
            {...stringAvatar(`${user?.given_name} ${user?.family_name}`)}
            sx={{
              maxHeight: '2.5rem',
              maxWidth: '2.5rem',
              textTransform: 'lowercase',
            }}
          />
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          sx={{
            '&:hover': {
              background: '#FFEECC',
            },
          }}
          onClick={handleClickLogout}
        >
          LOGOUT
        </MenuItem>
      </Menu>
    </>
  )
}

export default MenuUser
