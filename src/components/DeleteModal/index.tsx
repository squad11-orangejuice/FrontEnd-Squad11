import * as React from 'react'
import { useState } from 'react'

import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import {
  DialogContainer,
  StyledDialogActions,
  StyledDialogTitle,
  CancelButton,
  ConfirmButton,
} from './styles'
import SucessModal from '../RequestResponseModal'

interface ModalSucessProps {
  openState: boolean
  modalText: string
  isDelete: boolean
  onClickConfirm: () => void
  onClickCancel: () => void
}

export default function DeleteModal({
  openState,
  modalText,
  onClickConfirm,
  onClickCancel,
}: ModalSucessProps) {
  const [sucessModalState, setSucessModalState] = useState(false)

  const handleClickConfirm = () => {
    onClickConfirm()

    // depende da resposta do servidor
    setSucessModalState(true)
  }

  const handleClickCancel = () => {
    if (onClickCancel) {
      onClickCancel()
    }
  }

  return (
    <React.Fragment>
      <Dialog open={openState} onClose={handleClickCancel}>
        <DialogContainer>
          <div>
            <StyledDialogTitle>
              <p> {modalText} </p>
            </StyledDialogTitle>

            <DialogContent>
              <p>Se você prosseguir irá excluir o projeto do seu portfólio</p>
            </DialogContent>

            <StyledDialogActions>
              <ConfirmButton onClick={handleClickConfirm}>
                'Excluir'
              </ConfirmButton>
              <CancelButton onClick={handleClickCancel}>Cancelar</CancelButton>
            </StyledDialogActions>
          </div>
        </DialogContainer>
      </Dialog>
      {
        <SucessModal
          modalText={'Edição concluída com sucesso!'}
          openState={sucessModalState}
          onClickConfirm={handleClickConfirm}
        />
      }
    </React.Fragment>
  )
}
