import { CardProjectContainer, SubtitleText, TextContainer, Titletext } from "./styles";
import CollectionsIcon from '@mui/icons-material/Collections';

interface CarProjectProps {
  url?: string
}
export function CardProject({ url }: CarProjectProps) {
  return (
    <>
      <CardProjectContainer>
        <CollectionsIcon sx={{ fontSize: 40 }} />
        <TextContainer>
          <Titletext> Adicione seu primeiro projeto </Titletext>
          <SubtitleText> Compartilhe seu talento com milhares de pessoas </SubtitleText>
        </TextContainer>
      </CardProjectContainer>


    </>
  )
}