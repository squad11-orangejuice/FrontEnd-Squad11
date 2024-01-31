/* eslint-disable react-hooks/exhaustive-deps */
import { AreaCard, CardProjectContainer } from './styles'
import UserImage from '@/assets/avatar1.svg'

import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'
import { ViewProjectModal } from '../ViewProjectModal'
import { CardAddProject } from '../CardAddProject'
import { useLocation } from 'react-router-dom'
import { EditProjectButton } from '../EditProjectButton'
import { ProjectDetails } from '../ProjectDetails'
import { IProject } from '@/utils/types'

interface CardProjectProps {
  isCursorPointerActive?: boolean
  projectData?: IProject | undefined
}
export function CardProject({
  isCursorPointerActive = false,
  projectData,
}: CardProjectProps) {
  const modalContext = useOpenCloseModal()

  const {
    openEditModal,
    openDeleteModal,
    openAddProjectModal,
    openViewPostModal,
    viewPostModalOpen,
  } = modalContext

  const location = useLocation()

  const actualRoute = location.pathname

  function handleClickOpenEditModal() {
    if (projectData) {
      openEditModal(projectData)
    }
  }

  function handleClickOpenDeleteModal() {
    if (projectData) {
      openDeleteModal(projectData)
    }
  }

  const shouldRenderEditButton =
    projectData && actualRoute === '/projetos' ? (
      <EditProjectButton
        openModalEdit={handleClickOpenEditModal}
        openModalDelete={handleClickOpenDeleteModal}
      />
    ) : null

  const cardContent = projectData?.imagem ? (
    <img src={projectData?.imagem} alt="Imagem" />
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
      {projectData?.imagem ? (
        <ProjectDetails
          date={projectData.data!}
          tags={projectData.tags}
          urlUserImage={UserImage}
          user={projectData.user}
        />
      ) : null}
      {viewPostModalOpen && <ViewProjectModal />}
    </CardProjectContainer>
  )
}
