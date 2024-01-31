import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import {
  DialogContainer,
  StyledDialogActions,
  StyledDialogTitle,
} from './styles'
import { Button } from '../Button'
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'

export enum Status {
  Success = 'success',
  Error = 'error',
}

interface ModalSucessProps {
  modalText: string
  typeMessage: Status
}

export function RequestResponseModal({
  modalText,
  typeMessage,
}: ModalSucessProps) {
  const { closeAllModal, requestResponseModalOpen } = useOpenCloseModal()

  return (
    <Dialog open={requestResponseModalOpen} onClose={closeAllModal}>
      <DialogContainer>
        <div>
          <StyledDialogTitle>
            <p> {modalText} </p>
          </StyledDialogTitle>

          <DialogContent>
            {typeMessage === 'success' ? (
              <CheckCircleIcon sx={{ fontSize: 40 }} color="success" />
            ) : (
              <ErrorIcon sx={{ fontSize: 40 }} color="error" />
            )}
          </DialogContent>

          <StyledDialogActions>
            <Button
              title="Voltar Para Projetos"
              size="large"
              color="primary"
              variant="contained"
              onClick={closeAllModal}
            />
          </StyledDialogActions>
        </div>
      </DialogContainer>
    </Dialog>
  )
}
