import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Header } from '../Header';
import UserDiscover from '@/assets/UserDiscover.svg';
import ImgView from '@/assets/ImgView.png'
import { ImageContainer, HeaderContainerBottom, ContainerModalBody, ContentUser, FooterModal, HeaderContainerModal, LeftContainer, Tags, TagsProject, TitlePost, MainContainer, TitlePostBottom } from './styles';
import useIsMobile from '@/hooks/useIsMobile';
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal';

const style = {
  position: 'absolute',
  width: '60%',
  overflow: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  '@media (max-width: 600px)': {
    width: '100%',
    height: '100%',
  },
};

interface ViewProjectsModalProps {
  userName: string;
  url: string;
}



export function ViewProjectModal({ userName, url }: ViewProjectsModalProps) {
  const handleClose = () => { closeViewPostModal() }

  const isMobile = useIsMobile();
  const modalContext = useOpenCloseModal()
  const { closeViewPostModal, viewPostModalOpen } = modalContext


  return (

    <Modal
      open={viewPostModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {isMobile ? <Header></Header> : null}
        <MainContainer>
          <HeaderContainerModal>
            <LeftContainer>
              <img src={UserDiscover} />
              <ContentUser>
                {userName}
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
          <button onClick={handleClose}>
            <CloseIcon sx={isMobile ? { fontSize: 24, position: 'absolute', top: 90, right: 16 } : { fontSize: 24, position: 'absolute', top: 16, right: 16 }} />
          </button>
          <ContainerModalBody>
            <TitlePostBottom>  Ecommerce One Page </TitlePostBottom>
            <ImageContainer>
              <img src={url} />
            </ImageContainer>

            <HeaderContainerBottom>
              <LeftContainer>
                <img src={UserDiscover} />
                <ContentUser>
                  {userName}
                  <p> 02/24 </p>
                </ContentUser>
              </LeftContainer>


              <TagsProject>
                <Tags> UI</Tags>
                <Tags> Web</Tags>
              </TagsProject>
            </HeaderContainerBottom>


            <FooterModal>
              <p> Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.</p>
              <p>
                Download
                https://gumroad.com/products/wxCSL</p>
            </FooterModal>
          </ContainerModalBody>
        </MainContainer>
      </Box>
    </Modal>
  );
}