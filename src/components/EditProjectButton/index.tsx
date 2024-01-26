import * as React from 'react'
import Button from '@mui/material/Button'

import Menu from '@mui/material/Menu'
import ModeIcon from '@mui/icons-material/Mode'
import { StyledMenuItem } from './styles'

type Props = {
  openModalEdit: () => void
  openModalDelete: () => void
}

export default function BasicMenu({ openModalEdit, openModalDelete }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickOpenEditModal = () => {
    openModalEdit()
    setAnchorEl(null)
  }

  const handleClickOpenDeleteModal = () => {
    openModalDelete()
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
      >
        <ModeIcon
          style={{
            color: '#303133',
            background: '#FFCC99',
            borderRadius: '50%',
            fontSize: 20,
          }}
        />
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
        <StyledMenuItem onClick={handleClickOpenEditModal}>
          Editar
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClickOpenDeleteModal}>
          Excluir
        </StyledMenuItem>
      </Menu>
    </div>
  )
}
