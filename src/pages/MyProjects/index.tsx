/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Header } from '@/components/Header'
import ImageUser from '@/assets/ImageUser.png'
import {
  BotaoAdicionarProjeto,
  CardDisplay,
  ContainerUser,
  MyProjectsContainer,
  UserInfo,
  UserLocal,
  UserNome,
  UserPerfil,
} from './styles'
import TextField from '@mui/material/TextField'
import { CardProject } from '@/components/CardProject'
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'
import { ProjectFormModal } from '@/components/ProjectFormModal'
import { DeleteProjectModal } from '@/components/DeleteProjectModal'
import ModalSucess from '@/components/ModalSucess'
import { mockInfo, blankProjectMock } from '@/utils/constants'


export function MyProjects() {
  const [items, setItems] = useState(mockInfo)
  const [userId, setUserId] = useState('1');
  const [searchTerm, setSearchTerm] = useState('')

  const modalContext = useOpenCloseModal()

  const { editModalOpen, deleteModalOpen } = modalContext

  const shouldDisableButton = items.length === 0

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  const filteredItems = items.filter((item) =>
    item.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  )

  const handleOnClick = () => {
    console.log('Hello')
  }

  const cardContent =
    filteredItems.length >= 1 ? (
      filteredItems.map((item) => {
        if (userId === item.id) {
          return (
            <CardProject
              projectData={item}
              onClick={() => { }}
            />
          )
        }
      })
    ) : (
      <CardProject projectData={blankProjectMock} onClick={() => { }} />
    )

  return (
    <>
      <Header />
      <ContainerUser>
        <UserPerfil>
          <img src={ImageUser} alt="Foto-perfil-usuário" />
        </UserPerfil>
        <UserInfo>
          <UserNome> Camila Soares</UserNome>
          <UserLocal> Brasil </UserLocal>
          <BotaoAdicionarProjeto
            onClick={handleOnClick}
            disabled={shouldDisableButton}
          >
            <strong> Adicionar Projeto </strong>{' '}
          </BotaoAdicionarProjeto>
        </UserInfo>
      </ContainerUser>

      <MyProjectsContainer>
        Meus projetos
        <TextField
          sx={{ width: '100%' }}
          id="outlined-helperText"
          label="Buscar tags"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </MyProjectsContainer>

      <CardDisplay>{cardContent}</CardDisplay>
      {editModalOpen && <ProjectFormModal titleModal="Editar projeto " />}
      {deleteModalOpen && <DeleteProjectModal />}

      <ModalSucess openState={true} />
    </>
  )
}
