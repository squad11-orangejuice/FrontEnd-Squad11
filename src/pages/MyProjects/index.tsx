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

const mockInfo = [
  // Info Para Testar Cards
  {
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    name: 'Alanna Silva',
    tags: ['UX', 'WEB'],
  },
  {
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    name: 'Carolina',
    tags: ['UX', 'UI'],
  },
  {
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    name: 'Douglas',
    tags: ['UI', 'WEB'],
  },
]

export function MyProjects() {
  const [items, setItems] = useState(mockInfo)
  const [searchTerm, setSearchTerm] = useState('')

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
            url={item.url}
            key={item.name}
            creatorId={1}
            tags={item.tags}
            name={item.name}
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
    </>
  )
}
