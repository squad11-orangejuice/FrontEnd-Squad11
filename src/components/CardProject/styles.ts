import styled from 'styled-components'

export const CardProjectContainer = styled.button`
  align-items: center;
  background: ${(props) => props.theme.colors['$color-neutral-70']};
  border-radius: 4px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 389px;

  @media screen and (max-width: 455px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 258px;
    border-radius: 4px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors['$color-neutral-120']};
  font-weight: ${(props) => props.theme.fontWeight.regular};
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
  width: 100%;
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
    font-weight: ${(props) => props.theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.textSizes.subtitle1};
  }
`
export const Tag = styled.div`
  border-radius: 50%;
  padding: 5px;
  margin-left: 5px;

  background: ${(props) => props.theme.colors['$color-neutral-70']};
  color: ${({ theme }) => theme.colors['$color-neutral-100']};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: 12px;
`

export const EditButton = styled.button`
  position: absolute;
`

export const AreaCard = styled.div`
  height: 258px;
  width: 389px;
  border-radius: 4px;

  @media only screen and (max-width: 437px) {
    width: 312px;
  }
`
