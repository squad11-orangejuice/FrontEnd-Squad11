/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import {
  CardProjectContainer,
  SubtitleText,
  TextContainer,
  Titletext,
  Footer,
  Tag,
} from './styles'
import ImageUser from '@/assets/ImageUser.png'

import CollectionsIcon from '@mui/icons-material/Collections'
import EditProjectButton from '../EditProjectButton'
import { useOpenCloseModal } from '@/hooks/useOpenCloseModal'

interface CarProjectProps {
  url?: string
  name?: string
  creatorId?: number
  tags: Array<string>
  title?: string
  description?: string
  linkProject?: string
}
export function CardProject({
  url = '',
  creatorId,
  tags,
  name = '',
  description = '',
  title = '',
  linkProject = '',
}: CarProjectProps) {
  const [userId, setUserId] = useState(1)

  const modalContext = useOpenCloseModal()
  const { openEditModal } = modalContext

  function handleOpenEdit() {
    console.log('aqui')
    openEditModal({
      description,
      url,
      tags,
      title,
      linkProject,
    })
  }

  const shouldRenderEditButton =
    userId === creatorId ? (
      <EditProjectButton openModal={handleOpenEdit} />
    ) : null

  // remover console.log assim que possivel
  console.log(setUserId)

  const tagContent = tags.map((item) => {
    return <Tag key={item}>{item}</Tag>
  })

  const cardContent = url ? (
    <>
      <img src={url} alt="Imagem" />
    </>
  ) : (
    <>
      <CollectionsIcon sx={{ fontSize: 40 }} />
      <TextContainer>
        <Titletext> Adicione seu primeiro projeto </Titletext>
        <SubtitleText>
          {' '}
          Compartilhe seu talento com milhares de pessoas{' '}
        </SubtitleText>
      </TextContainer>
    </>
  )

  return (
    <div>
      <CardProjectContainer>
        {shouldRenderEditButton}
        {cardContent}
        {url ? (
          <Footer>
            <div>
              <img src={ImageUser} alt="Foto do usuário" />
              <p>{name}</p>
              <p>12/23</p>
            </div>
            <div>{tagContent}</div>
          </Footer>
        ) : null}
      </CardProjectContainer>
    </div>
  )
}
