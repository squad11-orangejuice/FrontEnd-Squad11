import { ChangeEvent, useState } from 'react'
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
import { useQuery } from '@tanstack/react-query'
import { getAllDiscover } from '@/services/api'
import { SkeletonLoading } from '@/components/SkeletonLoading'

export function Discover() {
  const [searchTerm, setSearchTerm] = useState('')

  const { data, isLoading } = useQuery({
    queryKey: ['discover'],
    queryFn: getAllDiscover,
  })

  const modalContext = useOpenCloseModal()

  const { viewPostModalOpen } = modalContext

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
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
    data && filteredItems.length >= 1
      ? filteredItems.map((item) => {
          return <CardProject key={item.id} projectData={item} />
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

        <CardDisplay>
          {isLoading ? <SkeletonLoading quantity={3} /> : cardContent}
        </CardDisplay>
      </MyDiscoverContainer>
      {viewPostModalOpen && <ViewProjectModal />}
    </MainContent>
  )
}
