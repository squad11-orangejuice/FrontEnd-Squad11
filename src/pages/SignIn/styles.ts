import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton'

export const SignInContainer = styled.main`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  width: 100%;
`
export const Image = styled.img`
  height: 100vh;
  max-width: 32.813rem;
  @media (max-width: 1100px) {
    display: none;
  }
`

export const AreaLogin = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  padding: 0 1rem;
  text-align: center;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.textSizes.h3};
  font-family: ${({ theme }) => theme.fonts.regular};
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.textSizes.h5};
    line-height: 24px;
  }
`

export const AreaForm = styled('form')`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  width: 100%;
`
export const SubTitle = styled.h5`
  color: ${({ theme }) => theme.colors['$color-neutral-110']};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes.h5};
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.textSizes.subtitle1};
    line-height: 16px;
    letter-spacing: 0.15px;
  }
`
export const SubmitButton = styled(LoadingButton)`
  && {
    background-color: ${({ theme }) => theme.colors['$color-secondary-100']};

    &:hover {
      background-color: ${({ theme }) => theme.colors['$color-secondary-110']};
    }
  }
`

export const LinkText = styled(Link)`
  color: ${({ theme }) => theme.colors['$color-neutral-100']};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes.subtitle1};
  font-weight: 400;
  letter-spacing: 0.15px;
  line-height: 16px;
  text-decoration: none;
`
