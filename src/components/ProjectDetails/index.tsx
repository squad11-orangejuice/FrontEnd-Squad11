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
import { ITag, IUser } from '@/utils/types'
import Avatar from '@mui/material/Avatar'
import { stringAvatar } from '@/functions/stringAvatar'

type Props = {
  titleProject?: string
  urlUserImage: string
  user: IUser
  date: string
  tags: ITag[]
}

export function ProjectDetails({ date, user, tags, titleProject }: Props) {
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
        {!user.avatar ? (
          <Avatar
            {...stringAvatar(`${user?.nome} ${user?.sobrenome}`)}
            sx={{
              maxHeight: isMobile ? '2.5rem' : '1.5rem',
              maxWidth: isMobile ? '2.5rem' : '1.5rem',
              textTransform: 'lowercase',
            }}
          />
        ) : (
          <UserAvatar
            style={{
              maxHeight: isMobile ? '2.5rem' : '1.5rem',
              maxWidth: isMobile ? '2.5rem' : '1.5rem',
              borderRadius: '100%',
            }}
            src={user.avatar}
            alt="Foto do usuário"
          />
        )}

        {isMobile ? (
          <AreaDetails>
            <UserName>{`${user.nome} ${user.sobrenome}`}</UserName>
            <PublishDate>{date}</PublishDate>
          </AreaDetails>
        ) : (
          <UserInfo>{`${user.nome} ${user.sobrenome} • ${date}`}</UserInfo>
        )}
      </UserInformationContainer>
      {titleProject && isMobile && <NameProject>{titleProject}</NameProject>}
      <TagContainer>
        {tags &&
          tags.map((tag, index) => {
            return <Tag key={index}>{tag.nome}</Tag>
          })}
      </TagContainer>
    </Container>
  )
}
