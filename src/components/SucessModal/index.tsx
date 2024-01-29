import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { DialogContainer, StyledDialogActions, StyledDialogTitle, ConfirmButton } from './styles';


interface ModalSucessProps {
  openState: boolean
  modalText: string
  onClickConfirm: () => void
}


export default function SucessModal({ openState, modalText, onClickConfirm, }: ModalSucessProps) {

  const handleClickConfirm = () => {
    onClickConfirm();
  }


  return (
    <React.Fragment>

      <Dialog
        open={openState}
        onClose={handleClickConfirm}
      >

        <DialogContainer>
          <div>
            <StyledDialogTitle>
              <p> {modalText} </p>
            </StyledDialogTitle>

            <DialogContent>
              <CheckCircleIcon sx={{ fontSize: 40 }} color="success" />
            </DialogContent>


            <StyledDialogActions>
              <ConfirmButton onClick={handleClickConfirm} >
                'Voltar Para Projetos'
              </ConfirmButton>

            </StyledDialogActions>

          </div>
        </DialogContainer>
      </Dialog>
    </React.Fragment >
  );
}
