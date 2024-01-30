import styled from 'styled-components'

export const MainContent = styled.main`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`

export const ContainerMyProject = styled.div`
  padding: 0 2rem 39px;
  width: 100%;

  @media only screen and (max-width: 667px) {
    padding: 0 1.5rem 2.25rem;
  }
`

export const ContainerUser = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 2.625rem;
  justify-content: center;
  padding: 7rem 2rem 3.5rem;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    gap: 1rem;
    padding: 3.5rem 2rem 2.5rem;
  }
`

export const UserPerfil = styled.img`
  width: 7.625rem;
  height: 7.625rem;
  border-radius: 50%;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`

export const UserName = styled.h2`
  font-weight: ${(props) => props.theme.fontWeight.regular};

  font-size: ${(props) => props.theme.textSizes.h5};
  color: ${(props) => props.theme.colors['$color-neutral-120']};
`

export const UserLocal = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.textSizes.subtitle1};
  color: ${(props) => props.theme.colors['$color-neutral-90']};
  letter-spacing: 0.15px;
  margin: 1rem 0 1.5rem;
  opacity: 0.5;
  @media only screen and (max-width: 500px) {
    margin: 0.5rem 0;
  }
`

export const MyProjectsContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors['$color-neutral-130']};
  flex-direction: column;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: ${(props) => props.theme.textSizes.h6};
  gap: 1rem;
  width: 513px;

  @media only screen and (max-width: 560px) {
    width: 100%;
  }
`
export const Label = styled.label`
  color: ${({ theme }) => theme.colors['$color-neutral-120']};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.textSizes.h6};
  letter-spacing: 0.15px;
  opacity: 0.6;
`

export const CardDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2.5rem;
  max-width: 100%;

  @media (max-width: 389px) {
    width: 312px;
  }

  @media only screen and (max-width: 667px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 872px) {
    span {
      &:nth-child(2),
      &:nth-child(3) {
        display: none;
      }
    }
  }
  @media (min-width: 873px) and (max-width: 1282px) {
    span {
      &:nth-child(3) {
        display: none;
      }
    }
  }
`
