import { useState } from 'react'
import { Header } from '@/components/Header'
import TextField from '@mui/material/TextField'
import {
  ProjectsContainer,
  CardDisplay,
  TitleContainer,
  MainContent,
  MyDiscoverContainer,
} from './styles'
import { CardProject } from '@/components/CardProject'
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'
import { ViewProjectModal } from '@/components/ViewProjectModal'
import { mockInfo } from '@/utils/constants'

export function Discover() {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState(mockInfo)

  const modalContext = useOpenCloseModal()

  const { viewPostModalOpen } = modalContext

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
      ? filteredItems.map((item, index) => {
          return (
            <CardProject key={index} projectData={item} isCursorPointerActive />
          )
        })
      : null

  return (
    <MainContent>
      <Header />
      <MyDiscoverContainer>
        <TitleContainer>
          <h4>
            Junte-se à comunidade de inovação, inspiração e descobertas,
            transformando experiências em conexões inesquecíveis
          </h4>
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
      </MyDiscoverContainer>
      {viewPostModalOpen && <ViewProjectModal />}
    </MainContent>
  )
}
