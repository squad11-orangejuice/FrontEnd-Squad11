import styled from 'styled-components'

export const CardProjectContainer = styled.button`
  display: flex;
  width: calc(100% - 4rem);
  height: 16.12rem;
  border-radius: 4px;
  margin: 2rem 2rem 2rem 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* padding: 4.25rem 3.75rem 4.25rem 3.75rem; */
  background: ${(props) => props.theme.colors['$color-neutral-70']};
  border: none;

  @media only screen and (min-width: 601px) {
    width: 24.31rem;
  }

  img {
    width: calc(100%);
    height: 14.03rem;
    border-radius: 4px;

    @media only screen and (min-width: 601px) {
      width: 24.31rem;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors['$color-neutral-120']};
  font-family: ${(props) => props.theme.fonts.regular};
  margin-top: 1rem;
`

export const Titletext = styled.div`
  font-size: ${(props) => props.theme.textSizes.body1};
`

export const SubtitleText = styled.div`
  font-size: ${(props) => props.theme.textSizes.body2};
  margin-top: 0.5rem;
`

export const Footer = styled.div`
  display: flex;
  height: 2.09rem;
  width: calc(100%);
  padding: 0.3rem;
  background: ${(props) => props.theme.colors['$color-neutral-60']};
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
  }

  img {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
  }
  p {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors['$color-neutral-110']};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.textSizes.subtitle1};
  }
`
export const Tag = styled.div`
  border-radius: 50%;
  padding: 5px;
  margin-left: 5px;

  background: ${(props) => props.theme.colors['$color-neutral-70']};
  color: ${({ theme }) => theme.colors['$color-neutral-100']};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
`
