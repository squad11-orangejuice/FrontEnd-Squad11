import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 6.375rem 6.188rem;

  @media only screen and (max-width: 1024px) {
    margin: 2.13rem 1.5rem;
  }
`

export const TitleProject = styled.h5`
  color: ${({ theme }) => theme.colors['$color-neutral-120']};
  font-size: ${({ theme }) => theme.textSizes.h5};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin-bottom: 2rem;

  @media only screen and (min-width: 1042px) {
    display: none;
    margin-bottom: 0;
  }
`

export const ContainerModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    flex-direction: column-reverse;
    margin-top: 0;
  }
`

export const ImageProject = styled.img`
  border-radius: 4px;
  max-height: 586px;
  margin: 2rem 0 4rem;
  width: 100%;

  @media only screen and (max-width: 460px) {
    height: 258px;
    margin: 0 0 0.5rem;
  }
`

export const FooterModal = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media only screen and (max-width: 760px) {
    margin-top: 1rem;
  }
`

export const DescriptionModal = styled.p`
  font-size: ${({ theme }) => theme.textSizes.body1};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-style: normal;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors['$color-neutral-120']};
`

export const Span = styled.span`
  font-size: ${({ theme }) => theme.textSizes.subtitle1};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-style: normal;
  letter-spacing: 0.15px;
  color: ${({ theme }) => theme.colors['$color-neutral-130']};
`

export const UrlProject = styled(Link)`
  color: ${({ theme }) => theme.colors['$color-info-80']};
  cursor: pointer;
  font-size: ${({ theme }) => theme.textSizes.body2};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-style: normal;
  line-height: 14px;
  letter-spacing: 0.25px;
  padding-bottom: 2px;
`
