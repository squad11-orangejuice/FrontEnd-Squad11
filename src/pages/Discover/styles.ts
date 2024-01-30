import styled from 'styled-components'

export const MainContent = styled.main`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`

export const MyDiscoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7rem 2rem 77px;
  width: 100%;
  @media only screen and (max-width: 667px) {
    padding: 4rem 1.5rem 2.25rem;
  }
`

export const ProjectsContainer = styled.div`
  margin: 5rem 0 2.5rem;
  width: 723px;

  @media screen and (max-width: 667px) {
    margin: 2.5rem 0 2rem;
  }
  @media screen and (max-width: 790px) {
    width: 100%;
  }
`

export const CardDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: auto;

  @media (max-width: 872px) {
    width: 312px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 33%;

  h4 {
    color: ${(props) => props.theme.colors['$color-principal-90']};
    font-size: ${(props) => props.theme.textSizes.h4};
    font-weight: ${(props) => props.theme.fontWeight.regular};
    letter-spacing: 0.25px;
    max-width: 744px;
    @media only screen and (max-width: 667px) {
      font-size: ${(props) => props.theme.textSizes.h5};
      letter-spacing: 0;
    }
  }
  p {
    text-align: center;
    color: ${(props) => props.theme.colors['$color-neutral-130']};
    font-size: ${(props) => props.theme.textSizes.h4};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }
`
