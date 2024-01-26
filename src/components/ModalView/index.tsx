import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Header } from '../Header';
import UserDiscover from '@/assets/UserDiscover.svg';
import ImgView from '@/assets/ImgView.png'
import { ContainerModalBody, ContentUser, FooterModal, HeaderContainerModal, LeftContainer, Tags, TagsProject, TitlePost, } from './styles';

const style = {
  position: 'absolute',
  overflow: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  p: 4,
  height: '600px',
  width: 1000,
};


export function ModalView() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Header />
      <Button onClick={handleOpen}>CardProjects</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <HeaderContainerModal>
            <LeftContainer>
              <img src={UserDiscover} />
              <ContentUser>
                Bianca Martin
                <p> 02/24 </p>
              </ContentUser>
            </LeftContainer>
            <div>
              <TitlePost>  Ecommerce One Page </TitlePost>
            </div>

            <TagsProject>
              <Tags> UI</Tags>
              <Tags> Web</Tags>
            </TagsProject>
          </HeaderContainerModal>
          <CloseIcon sx={{ fontSize: 24, position: 'absolute', top: 16, right: 16 }} />
          <ContainerModalBody>
            <img src={ImgView} />

            <FooterModal>
              <p> Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.</p>
              <p>
                Download
                https://gumroad.com/products/wxCSL</p>
            </FooterModal>
          </ContainerModalBody>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
              <img src={UserDiscover} />Bianca Martin
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}