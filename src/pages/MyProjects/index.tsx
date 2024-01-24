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

export function MyProjects() {
  const [cards, setCards] = useState([
    // URLs para testar card
    // 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    // 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    // 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    // 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    // 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
  ])

  // remover console.log assim que possivel
  console.log(setCards)

  const cardContent =
    cards.length >= 1 ? (
      cards.map((item) => {
        return <CardProject url={item} key={item} />
      })
    ) : (
      <CardProject />
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
          <BotaoAdicionarProjeto>
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
        />
      </MyProjectsContainer>
      <CardDisplay>{cardContent}</CardDisplay>
    </>
  )
}
