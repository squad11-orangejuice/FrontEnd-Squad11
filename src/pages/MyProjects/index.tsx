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
} from './styles'
import TextField from '@mui/material/TextField'

import { CardProject } from '@/components/CardProject'
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'
import { ProjectFormModal } from '@/components/ProjectFormModal'
import { DeleteProjectModal } from '@/components/DeleteProjectModal'
import { Button } from '@/components/Button'
import { SkeletonLoading } from '@/components/SkeletonLoading'
import { getAllProjects } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import { RequestResponseModal } from '@/components/RequestResponseModal'

export function MyProjects() {
  const [searchTerm, setSearchTerm] = useState('')

  const { data, isLoading } = useQuery({
    queryKey: ['project'],
    queryFn: getAllProjects,
  })

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

  const filteredItems = data
    ? data.filter((item) =>
        item.tags.some((tag) =>
          tag.nome.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      )
    : []

  const cardContent =
    data && !isLoading && data.length > 0 ? (
      filteredItems.map((item) => {
        return <CardProject key={item.id} projectData={item} />
      })
    ) : (
      <>
        <CardProject />
        <SkeletonLoading quantity={2} />
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
        <CardDisplay>
          {isLoading ? <SkeletonLoading quantity={3} /> : cardContent}
        </CardDisplay>

        {addProjectModalOpen && (
          <ProjectFormModal titleModal="Adicionar projeto" />
        )}
        {editModalOpen && <ProjectFormModal titleModal="Editar projeto" />}
        {deleteModalOpen && <DeleteProjectModal />}
        <RequestResponseModal />
      </ContainerMyProject>
    </MainContent>
  )
}
