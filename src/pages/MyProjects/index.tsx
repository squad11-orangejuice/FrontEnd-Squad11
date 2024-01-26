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
import { CardProject } from '@/components/CardProjects'
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'
import { ProjectFormModal } from '@/components/ProjectFormModal'
import { DeleteProjectModal } from '@/components/DeleteProjectModal'

const mockInfo = [
  // Info Para Testar Cards
  {
    id: 'a',
    titulo: 'Aqui um titulo qualquer',
    linkProject: 'https://www.google.com/',
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    nome: 'Alanna Silva',
    tags: ['UX', 'Web'],
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
  },
  {
    id: 'b',
    titulo: 'Aqui um titulo qualquer1',
    linkProject: 'https://www.google.com/',
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    nome: 'Carolina',
    tags: ['UX', 'UI'],
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
  },
  {
    id: 'c',
    titulo: 'Aqui um titulo qualquer2',
    linkProject: 'https://www.google.com/',
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    nome: 'Douglas',
    tags: ['UI', 'Web'],
    descricao:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus laborum nemo ut cupiditate. Eaque sit neque, nihil odio illo mollitia iste esse obcaecati accusantium at? Reprehenderit non officia similique.',
  },
]

export function MyProjects() {
  const [items, setItems] = useState(mockInfo)
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
        return (
          <CardProject
            id={item.id}
            url={item.url}
            linkProject={item.linkProject}
            key={item.id}
            creatorId={1}
            tags={item.tags}
            name={item.nome}
            title={item.titulo}
            description={item.descricao}
          />
        )
      })
    ) : (
      <CardProject tags={[]} />
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
    </>
  )
}
