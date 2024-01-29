import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const ProjectFormModalContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  top: 0;
  padding: 0 1.5rem;
  padding-top: 11.125rem;
  position: fixed;
  width: 100vw;

  z-index: 999;
  @media (max-width: 768px) {
    overflow-y: auto;
  }
`

export const AreaModal = styled.div`
  background-color: #fefefe;
  min-height: 522px;
  padding: 1.5rem 2rem;
  width: 890px;
  animation: ${fadeIn} 0.3s ease;
  @media (max-width: 890px) {
    height: auto;
    padding: 1.5rem;
  }
`
export const Title = styled.h5`
  color: ${({ theme }) => theme.colors['$color-neutral-110']};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.textSizes.h5};
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
`

export const AreaForm = styled('form')`
  display: flex;
  gap: 23px;
  @media (max-width: 710px) {
    flex-direction: column-reverse;
  }
`
export const AreaImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`
export const AreaInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: auto;
  width: 100%;
`
export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors['$color-neutral-110']};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.textSizes.subtitle1};
  line-height: 1rem;
  letter-spacing: 0.15px;
`

export const AreaCard = styled.div`
  height: 304px;
  width: 389px;
  @media (max-width: 710px) {
    width: 100%;
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

export const AreaButton = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`
export const ButtonCancel = styled(Button)`
  && {
    background-color: #dfdfdf;
    box-shadow: none;

    &:hover {
      background-color: #d3d3d3;
      box-shadow: none;
    }
  }
`
