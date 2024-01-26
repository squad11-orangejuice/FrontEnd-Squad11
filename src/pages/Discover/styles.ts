import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  gap: 1rem;

  @media only screen and (min-width: 601px) {
    max-width: 50%;
  }
`

export const CardDisplay = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; 
  margin-top: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;

  height: 33%;

  p {
    color: ${(props) => props.theme.colors['$color-neutral-130']};
    font-size: ${(props) => props.theme.textSizes.h4};
    font-weight:  ${(props) => props.theme.fontWeight.bold};
  }
`