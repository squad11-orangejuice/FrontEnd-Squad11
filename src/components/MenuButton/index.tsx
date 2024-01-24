import { useState, useRef } from 'react'
import { MobileButton, MobileMenu, MenuItem } from './styles'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

const MenuButton = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const buttonRef = useRef<HTMLButtonElement | null>(null)

  return (
    <div>
      <MobileButton onClick={toggleMenu}>
        <MenuOutlinedIcon style={{ color: 'white', background: '#111133' }} />
      </MobileButton>
      <MobileMenu
        isOpen={menuOpen}
        buttonRect={buttonRef.current?.getBoundingClientRect()}
      >
        <div>
          <MenuItem to="/projetos">Meus Projetos</MenuItem>
          <MenuItem to="/descobrir">Descobrir</MenuItem>
          <MenuItem to="/configuracoes">Configurações</MenuItem>
        </div>
      </MobileMenu>
    </div>
  )
}

export default MenuButton
