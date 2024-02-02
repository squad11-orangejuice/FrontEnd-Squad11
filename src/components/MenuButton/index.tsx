import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'

const MenuButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClickRedirectToNextPage = (page: string) => {
    setAnchorEl(null)
    navigate(`/${page}`)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        id="basic-button"
        className="menu-hamburgue"
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
        <MenuIcon sx={{ fontSize: '24px', color: '#ffffff' }} />
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
          onClick={() => handleClickRedirectToNextPage('projetos')}
        >
          Meus Projetos
        </MenuItem>
        <MenuItem
          sx={{
            '&:hover': {
              background: '#FFEECC',
            },
          }}
          onClick={() => handleClickRedirectToNextPage('descobrir')}
        >
          Descobrir
        </MenuItem>
        <MenuItem
          sx={{
            borderTop: '1px solid #E0E0E0',
            '&:hover': {
              background: '#FFEECC',
            },
          }}
          onClick={handleClose}
        >
          Configurações
        </MenuItem>
      </Menu>
    </>
  )
}

export default MenuButton
