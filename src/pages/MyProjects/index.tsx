/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Header } from '@/components/Header'
import UserImage from '@/assets/ImageUser.png'
import {
  ContainerMyProject,
  CardDisplay,
  ContainerUser,
  MyProjectsContainer,
  UserInfo,
  UserLocal,
  UserName,
  UserPerfil,
  Label,
  MainContent,
  DivSkeleton,
} from './styles'
import TextField from '@mui/material/TextField'
import Skeleton from '@mui/material/Skeleton'

import { CardProject } from '@/components/CardProject'
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'
import { ProjectFormModal } from '@/components/ProjectFormModal'
import { DeleteProjectModal } from '@/components/DeleteProjectModal'
import { mockInfo } from '@/utils/constants'
import { Button } from '@/components/Button'

export function MyProjects() {
  const [items, setItems] = useState(mockInfo)
  const [userId, setUserId] = useState('1')
  const [searchTerm, setSearchTerm] = useState('')

  const modalContext = useOpenCloseModal()

  const {
    editModalOpen,
    deleteModalOpen,
    addProjectModalOpen,
    openAddProjectModal,
  } = modalContext

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  const filteredItems = items.filter((item) =>
    item.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  )

  const cardContent =
    filteredItems.length >= 1 ? (
      filteredItems.map((item, index) => {
        if (userId === item.id) {
          return <CardProject key={index} projectData={item} />
        }
      })
    ) : (
      <>
        <CardProject />
        <Skeleton variant="rectangular">
          <DivSkeleton />
        </Skeleton>
        <Skeleton variant="rectangular">
          <DivSkeleton />
        </Skeleton>
      </>
    )

  return (
    <MainContent>
      <Header />
      <ContainerMyProject>
        <ContainerUser>
          <UserPerfil src={UserImage} alt="Foto-perfil-usuário" />
          <UserInfo>
            <UserName> Camila Soares</UserName>
            <UserLocal> Brasil </UserLocal>
            <Button
              title="ADICIONAR PROJETO"
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              onClick={openAddProjectModal}
            />
          </UserInfo>
        </ContainerUser>

        <MyProjectsContainer>
          <Label>Meus projetos</Label>
          <TextField
            sx={{ width: '100%' }}
            id="outlined-helperText"
            label="Buscar tags"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </MyProjectsContainer>
        <CardDisplay>{cardContent}</CardDisplay>

        {addProjectModalOpen && (
          <ProjectFormModal titleModal="Adicionar projeto" />
        )}
        {editModalOpen && <ProjectFormModal titleModal="Editar projeto" />}
        {deleteModalOpen && <DeleteProjectModal />}
      </ContainerMyProject>
    </MainContent>
  )
}
