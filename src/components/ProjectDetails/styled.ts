import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors['$color-neutral-60']};
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  padding-top: 8px;
  width: 100%;
`
export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const UserAvatar = styled.img`
  border-radius: 50%;
  max-height: 1.5rem;
  max-width: 1.5rem;
`

export const AreaDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const UserName = styled.p`
  color: ${({ theme }) => theme.colors['$color-neutral-120']};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.textSizes.subtitle1};
  letter-spacing: 0.15px;
  text-align: left;
`

export const PublishDate = styled.p`
  color: ${({ theme }) => theme.colors['$color-neutral-110']};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.textSizes.subtitle1};
  letter-spacing: 0.15px;
  text-align: left;
`

export const TagContainer = styled.div`
  display: flex;
`

export const UserInfo = styled.p`
  color: ${({ theme }) => theme.colors['$color-neutral-110']};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.textSizes.subtitle1};
  letter-spacing: 0.15px;
  text-align: left;
`

export const NameProject = styled.h5`
  color: ${({ theme }) => theme.colors['$color-neutral-120']};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.textSizes.h5};

  @media only screen and (max-width: 1042px) {
    display: none;
  }
`

export const Tag = styled.span`
  border-radius: 50%;
  padding: 0.438rem 0.625rem;
  margin-left: 5px;
  background: ${(props) => props.theme.colors['$color-neutral-70']};
  font-size: 12px;
`
