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

export function RequestResponseModal() {
  const {
    closeAllModal,
    requestResponseModalOpen,
    requestResponseMessage,
    requestStatus,
  } = useOpenCloseModal()

  return (
    <Dialog
      open={requestResponseModalOpen}
      onClose={closeAllModal}
      sx={{ width: '100vw', height: '100vh' }}
    >
      <DialogContainer>
        <div>
          <StyledDialogTitle>
            <p> {requestResponseMessage} </p>
          </StyledDialogTitle>

          <DialogContent>
            {requestStatus === 'success' ? (
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
