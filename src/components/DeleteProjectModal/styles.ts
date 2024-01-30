import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import { styled } from 'styled-components'

export const ModalDeleteContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  top: 0;
  padding: 0 1.5rem;
  position: absolute;
  width: 100vw;
  z-index: 999;
`

export const AreaModal = styled.div`
  background-color: ${({ theme }) => theme.colors['$color-neutral-60']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem 2.625rem;
  width: 421px;
  @media (max-width: 769px) {
    padding: 1.5rem;
  }
`
export const Title = styled.h5`
  color: ${({ theme }) => theme.colors['$color-neutral-110']};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.textSizes.h5};
  line-height: 1.5rem;
`
export const SubTitle = styled.label`
  color: ${({ theme }) => theme.colors['$color-neutral-110']};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.textSizes.body1};
  line-height: 1rem;
  letter-spacing: 0.5px;
`

export const AreaButton = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`
export const ButtonDelete = styled(LoadingButton)`
  height: 42px;
  width: 106px;
  && {
    background-color: ${({ theme }) => theme.colors['$color-secondary-100']};

    &:hover {
      background-color: ${({ theme }) => theme.colors['$color-secondary-110']};
    }
  }
`

export const ButtonCancel = styled(Button)`
  height: 42px;
  width: 124px;
  && {
    background-color: #dfdfdf;
    box-shadow: none;

    &:hover {
      background-color: #d3d3d3;
      box-shadow: none;
    }
  }
`
