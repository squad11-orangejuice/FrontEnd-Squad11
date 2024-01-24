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

interface CarProjectProps {
  url?: string
}
export function CardProject({ url }: CarProjectProps) {
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
    <>
      <CardProjectContainer>
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
    </>
  )
}
