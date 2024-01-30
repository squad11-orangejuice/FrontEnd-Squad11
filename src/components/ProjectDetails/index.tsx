import { useEffect, useRef, useState } from 'react'
import {
  Container,
  Tag,
  TagContainer,
  UserInfo,
  UserAvatar,
  UserInformationContainer,
  AreaDetails,
  UserName,
  PublishDate,
  NameProject,
} from './styled'

type Props = {
  titleProject?: string
  urlUserImage: string
  userName: string
  date: string
  tags: string[]
}

export function ProjectDetails({
  date,
  urlUserImage,
  userName,
  tags,
  titleProject,
}: Props) {
  const divRef = useRef<HTMLDivElement>(null)
  const [divWidth, setDivWidth] = useState<number>(0)

  useEffect(() => {
    const updateDivWidth = () => {
      if (divRef.current) {
        setDivWidth(divRef.current.offsetWidth)
      }
    }

    updateDivWidth()

    window.addEventListener('resize', updateDivWidth)

    return () => {
      window.removeEventListener('resize', updateDivWidth)
    }
  }, [])

  const isMobile = divWidth > 830

  return (
    <Container ref={divRef}>
      <UserInformationContainer
        style={{
          gap: isMobile ? '0.75rem' : '0.5rem',
        }}
      >
        <UserAvatar
          style={{
            maxHeight: isMobile ? '2.5rem' : '1.5rem',
            maxWidth: isMobile ? '2.5rem' : '1.5rem',
          }}
          src={urlUserImage}
          alt="Foto do usuário"
        />
        {isMobile ? (
          <AreaDetails>
            <UserName>{userName}</UserName>
            <PublishDate>{date}</PublishDate>
          </AreaDetails>
        ) : (
          <UserInfo>{`${userName} • ${date}`}</UserInfo>
        )}
      </UserInformationContainer>
      {titleProject && isMobile && <NameProject>{titleProject}</NameProject>}
      <TagContainer>
        {tags.map((tag, index) => {
          return <Tag key={index}>{tag}</Tag>
        })}
      </TagContainer>
    </Container>
  )
}
