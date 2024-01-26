import { useState } from 'react'
import { Header } from '@/components/Header'
import TextField from '@mui/material/TextField'
import { ProjectsContainer, CardDisplay, TitleContainer } from './styles'
import { CardProject } from '@/components/CardProject'
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'
import { ViewProjectModal } from '@/components/ViewProjectModal'
import { mockInfo, MockInfoType } from '@/utils/constants'

export function Discover() {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState(mockInfo)
  const [modalData, setModalData] = useState(mockInfo[0]);

  const modalContext = useOpenCloseModal()

  const { viewPostModalOpen, openViewPostModal } = modalContext

  const handleOnClickCard = (data: MockInfoType) => {
    setModalData(data);
    openViewPostModal();
  }


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
            key={item.userName}
            creatorId={3}
            tags={item.tags}
            name={item.userName}
            onClick={() => handleOnClickCard(item)}
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
      {viewPostModalOpen && <ViewProjectModal modalData={modalData} />}

    </>
  )
}
