import { useState } from 'react'
import { Header } from '@/components/Header'
import TextField from '@mui/material/TextField'
import { ProjectsContainer, CardDisplay, TitleContainer } from './styles'
import { CardProject } from '@/components/CardProject'

const mockInfo = [
  // Info Para Testar Cards
  {
    url: 'https://static7.depositphotos.com/1000572/681/i/950/depositphotos_6815375-stock-photo-horizontal-landscape-with-mountains.jpg',
    name: 'Alanna Silva',
    tags: ['UX', 'WEB'],
  },
  {
    url: 'https://images2.alphacoders.com/151/15102.jpg',
    name: 'Carolina',
    tags: ['UX', 'UI'],
  },
  {
    url: 'https://images4.alphacoders.com/134/1341419.png',
    name: 'Douglas',
    tags: ['UI', 'WEB'],
  },
]

export function Discover() {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState(mockInfo)

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  const filteredItems = items.filter((item) =>
    item.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  )

  const cardContent =
    filteredItems.length >= 1
      ? filteredItems.map((item) => {
        return (
          <CardProject
            url={item.url}
            key={item.name}
            creatorId={3}
            tags={item.tags}
            name={item.name}
          />
        )
      })
      : null

  return (
    <>
      <Header />
      <TitleContainer>
        <p>Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis</p>
      </TitleContainer>
      <ProjectsContainer>
        <TextField
          sx={{ width: '100%' }}
          id="outlined-helperText"
          label="Buscar tags"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </ProjectsContainer>

      <CardDisplay>{cardContent}</CardDisplay>
    </>
  )
}
