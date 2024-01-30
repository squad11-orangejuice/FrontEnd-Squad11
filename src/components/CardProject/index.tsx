/* eslint-disable react-hooks/exhaustive-deps */
import { AreaCard, CardProjectContainer } from './styles'
import UserImage from '@/assets/avatar1.svg'

import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'
import { ProjectData } from '@/context/ModalContext'
import { ViewProjectModal } from '../ViewProjectModal'
import { CardAddProject } from '../CardAddProject'
import { useLocation } from 'react-router-dom'
import { EditProjectButton } from '../EditProjectButton'
import { ProjectDetails } from '../ProjectDetails'

interface CardProjectProps {
  isCursorPointerActive?: boolean
  projectData?: ProjectData | undefined
}
export function CardProject({
  isCursorPointerActive = false,
  projectData,
}: CardProjectProps) {
  const modalContext = useOpenCloseModal()

  const {
    openEditModal,
    openAddProjectModal,
    openDeleteModal,
    openViewPostModal,
    viewPostModalOpen,
  } = modalContext

  const location = useLocation()

  const actualRoute = location.pathname

  function handleClickOpenEditModal() {
    if (projectData) {
      openEditModal({
        id: projectData.id,
        description: projectData.description,
        url: projectData.url,
        tags: projectData.tags,
        title: projectData.title,
        linkProject: projectData.linkProject,
        userName: projectData.userName,
      })
    }
  }

  function handleClickOpenDeleteModal() {
    if (projectData) {
      openDeleteModal({
        id: projectData.id,
        description: projectData.description,
        url: projectData.url,
        tags: projectData.tags,
        title: projectData.title,
        linkProject: projectData.linkProject,
        userName: projectData.userName,
      })
    }
  }

  const shouldRenderEditButton =
    projectData && actualRoute === '/projetos' ? (
      <EditProjectButton
        openModalEdit={handleClickOpenEditModal}
        openModalDelete={handleClickOpenDeleteModal}
      />
    ) : null

  const cardContent = projectData?.url ? (
    <img src={projectData?.url} alt="Imagem" />
  ) : (
    <AreaCard>
      <CardAddProject
        title="Adicione seu primeiro projeto"
        handleDivClick={openAddProjectModal}
      />
    </AreaCard>
  )

  return (
    <CardProjectContainer
      onClick={() =>
        actualRoute === '/descobrir' ? openViewPostModal(projectData!) : null
      }
      style={{ cursor: isCursorPointerActive ? 'pointer' : 'default' }}
    >
      {shouldRenderEditButton}
      {cardContent}
      {projectData?.url ? (
        <ProjectDetails
          date="12/23"
          tags={projectData.tags}
          urlUserImage={UserImage}
          userName={projectData.userName}
        />
      ) : null}
      {viewPostModalOpen && <ViewProjectModal />}
    </CardProjectContainer>
  )
}
