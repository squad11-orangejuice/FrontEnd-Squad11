import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { DialogContainer, StyledDialogActions, StyledDialogTitle } from './styles';


interface ModalSucessProps {
  openState: boolean
}


export default function ModalSucess({ openState }: ModalSucessProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* Botão para abrir o diálogo */}
      <Button variant="outlined" onClick={handleClickOpen}> botão </Button>

      {/* Diálogo */}
      <Dialog
        open={open} // Controla se o diálogo está aberto
        onClose={handleClose} // Função chamada ao fechar o diálogo
      // aria-labelledby="alert-dialog-title"
      // aria-describedby="alert-dialog-description"
      >
        {/* Título do diálogo */}
        <DialogContainer>
          <div>


            <StyledDialogTitle>
              <p> Projeto adicionado com sucesso! </p>
            </StyledDialogTitle>

            {/* Conteúdo do diálogo */}
            <DialogContent>
              <CheckCircleIcon sx={{ fontSize: 40 }} color="success" />
            </DialogContent>

            {/* Ações do diálogo (botões) */}
            <StyledDialogActions>
              <Button onClick={handleClose} >
                Voltar para projetos
              </Button>
              {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
            </StyledDialogActions>
          </div>
        </DialogContainer>
      </Dialog>
    </React.Fragment >
  );
}
