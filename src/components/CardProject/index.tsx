/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import {
  CardProjectContainer,
  SubtitleText,
  TextContainer,
  Titletext,
  Footer,
  Tag,
} from './styles'
import ImageUser from '@/assets/ImageUser.png'

import CollectionsIcon from '@mui/icons-material/Collections'
import EditProjectButton from '../EditProjectButton'
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'
import { ProjectData } from '@/context/ModalContext'
import { ViewProjectModal } from '../ViewProjectModal'

interface CardProjectProps {
  projectData: ProjectData;
  onClick: () => void
}
export function CardProject({
  projectData,
  onClick,
}: CardProjectProps) {
  const [userId, setUserId] = useState('1')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContext = useOpenCloseModal()
  const { openEditModal, openDeleteModal } = modalContext
  const { id, description, url, tags, title, linkProject, userName } = projectData

  function handleClickOpenEditModal() {
    openEditModal({
      id,
      description,
      url,
      tags,
      title,
      linkProject,
      userName,
    })
  }

  function handleClickOpenDeleteModal() {
    openDeleteModal({
      id,
      description,
      url,
      tags,
      title,
      linkProject,
      userName,
    })
  }

  function handleOnModalClose() {
    setIsModalOpen(false);
  }

  function handleOnClick() {
    setIsModalOpen(true);
    onClick();
  }

  const shouldRenderEditButton =
    userId === id ? (
      <EditProjectButton
        openModalEdit={handleClickOpenEditModal}
        openModalDelete={handleClickOpenDeleteModal}
      />
    ) : null


  const tagContent = tags.map((item) => {
    return <Tag key={item}>{item}</Tag>
  })

  const cardContent = url ? (
    <>
      <img src={url} alt="Imagem" />
    </>
  ) : (
    <>
      <CollectionsIcon sx={{ fontSize: 40 }} />
      <TextContainer>
        <Titletext> Adicione seu primeiro projeto </Titletext>
        <SubtitleText>
          {' '}
          Compartilhe seu talento com milhares de pessoas{' '}
        </SubtitleText>
      </TextContainer>
    </>
  )

  return (
    <>
      <div>
        <CardProjectContainer onClick={handleOnClick}>
          {shouldRenderEditButton}
          {cardContent}
          {url ? (
            <Footer>
              <div>
                <img src={ImageUser} alt="Foto do usuário" />
                <p>{userName}</p>
                <p>12/23</p>
              </div>
              <div>{tagContent}</div>
            </Footer>
          ) : null}
        </CardProjectContainer>
      </div>
      {isModalOpen && <ViewProjectModal modalData={projectData} isOpen={isModalOpen} onClose={handleOnModalClose} />}
    </>
  )
}
