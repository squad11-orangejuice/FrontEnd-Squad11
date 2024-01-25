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

interface CarProjectProps {
  url?: string
  creatorId?: number
}
export function CardProject({ url, creatorId }: CarProjectProps) {
  const [userId, setUserId] = useState(1)
  const shouldRenderEditButton =
    userId === creatorId ? <EditProjectButton /> : null

  // remover console.log assim que possivel
  console.log(setUserId)

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
              <p>Camila Soares</p>
              <p>12/23</p>
            </div>
            <div>
              <Tag>UX</Tag>
              <Tag>WEB</Tag>
            </div>
          </Footer>
        ) : null}
      </CardProjectContainer>
    </div>
  )
}
