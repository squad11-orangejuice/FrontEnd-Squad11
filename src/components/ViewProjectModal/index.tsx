import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import { Header } from '../Header'
import {
  ContainerModalBody,
  FooterModal,
  MainContainer,
  TitleProject,
  ImageProject,
  DescriptionModal,
  Span,
  UrlProject,
} from './styles'
import UserImage from '@/assets/avatar2.svg'
import useIsMobile from '@/hooks/useIsMobile'
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'
import { ProjectDetails } from '../ProjectDetails'

const style = {
  position: 'absolute',
  overflow: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  width: '1042px',

  '@media (max-width: 1042px)': {
    width: '100%',
    height: '100%',
  },
}

export function ViewProjectModal() {
  const { projectData, closeViewPostModal, viewPostModalOpen } =
    useOpenCloseModal()

  const { userName, url, description, linkProject, title, tags } = projectData!

  const isMobile = useIsMobile()

  return (
    <Modal
      open={viewPostModalOpen}
      onClose={() => closeViewPostModal()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },
        },
      }}
    >
      <Box sx={style}>
        {isMobile ? <Header /> : null}

        <MainContainer>
          <button onClick={() => closeViewPostModal()}>
            <CloseIcon
              sx={
                isMobile
                  ? { fontSize: 24, position: 'absolute', top: 90, right: 16 }
                  : { fontSize: 24, position: 'absolute', top: 16, right: 16 }
              }
            />
          </button>
          <ContainerModalBody>
            <TitleProject> {title} </TitleProject>
            <ImageProject src={url} alt="image projeto" />
            <ProjectDetails
              date="12/23"
              tags={tags}
              urlUserImage={UserImage}
              userName={userName}
              titleProject={title}
            />
          </ContainerModalBody>
          <FooterModal>
            <DescriptionModal> {description} </DescriptionModal>
            <Span>Download</Span>
            <UrlProject to={linkProject} target="_blank">
              {linkProject}
            </UrlProject>
          </FooterModal>
        </MainContainer>
      </Box>
    </Modal>
  )
}
