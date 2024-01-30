import * as React from 'react'

import Menu from '@mui/material/Menu'
import ModeIcon from '@mui/icons-material/Mode'

import { ArrowIconEdit, ButtonIconEdit, StyledMenuItem } from './styles'

type Props = {
  openModalEdit: () => void
  openModalDelete: () => void
}

export function EditProjectButton({ openModalEdit, openModalDelete }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
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
    <>
      <ButtonIconEdit onClick={handleClick}>
        <ModeIcon
          style={{
            color: '#303133',
            background: '#FFCC99',
            borderRadius: '50%',
            fontSize: 28,
            padding: '2px',
            position: 'relative',
          }}
        />
      </ButtonIconEdit>

      {anchorEl && <ArrowIconEdit />}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiMenu-paper': {
            padding: '1rem 0',
            borderRadius: '8px',
            background: '#FCFDFF',
            color: '#515255',
            letterSpacing: '0.15px',
          },
        }}
      >
        <StyledMenuItem
          sx={{
            '&:hover': {
              background: '#FFEECC',
            },
          }}
          onClick={handleClickOpenEditModal}
        >
          Editar
        </StyledMenuItem>
        <StyledMenuItem
          sx={{
            '&:hover': {
              background: '#FFEECC',
            },
          }}
          onClick={handleClickOpenDeleteModal}
        >
          Excluir
        </StyledMenuItem>
      </Menu>
    </>
  )
}
