import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Alert from '@mui/material/Alert'

export const SignUpContainer = styled.main`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  width: 100%;
`
export const Image = styled.img`
  height: 100vh;
  max-width: 32.813rem;
  @media (max-width: 1140px) {
    display: none;
  }
`

export const AreaRegister = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  text-align: center;
  width: 100%;
  height: 100vh;
`

export const AlertModal = styled(Alert)`
  position: fixed;
  top: 77px;
  font-weight: ${({ theme }) => theme.textSizes.subtitle1};
  height: 52px;
  width: 320px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  &.visible {
    opacity: 1;
  }

  @media (max-width: 360px) {
    width: calc(100% - 2rem);
    left: 1rem;
    right: 1rem;
  }
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.textSizes.h3};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  margin-bottom: 2rem;
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.textSizes.h5};
    line-height: 24px;
  }
`

export const AreaForm = styled('form')`
  align-items: flex-start;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  width: 32.313rem;

  & > div:nth-child(n + 3) {
    grid-column: span 2;
  }
  button {
    grid-column: span 2;
  }

   @media (max-width: 600px) {
  width: 100%;

  }
`

export const LinkText = styled(Link)`
  color: ${({ theme }) => theme.colors['$color-neutral-100']};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.textSizes.subtitle1};
  font-weight: 400;
  letter-spacing: 0.15px;
  line-height: 16px;
  text-decoration: none;
  text-align: left;
  width: 100%;
  grid-column: span 2;
`
