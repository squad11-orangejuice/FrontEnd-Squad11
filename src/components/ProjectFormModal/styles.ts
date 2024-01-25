import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import styled from 'styled-components'

export const ProjectFormModalContainer = styled.div`
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
  background-color: #fefefe;
  height: 522px;
  padding: 1.5rem 2rem;
  width: 890px;
  @media (max-width: 890px) {
    height: auto;
    padding: 1.5rem;
  }
`
export const Title = styled.h5`
  color: ${({ theme }) => theme.colors['$color-neutral-110']};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes.h5};
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
`

export const AreaForm = styled('form')`
  display: flex;
  gap: 1.438rem;
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
export const SubTitle = styled.label`
  color: ${({ theme }) => theme.colors['$color-neutral-110']};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes.subtitle1};
  line-height: 1rem;
  letter-spacing: 0.15px;
`
export const InputImage = styled.div`
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors['$color-neutral-70']};
  display: flex;
  flex-direction: column;
  height: 304px;
  justify-content: center;
  width: 100%;
`
export const TextImageInput = styled.span`
  color: ${({ theme }) => theme.colors['$color-neutral-120']};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes.body2};
  line-height: 0.875rem;
  letter-spacing: 0.25px;
  margin-top: 1rem;
  width: 270px;
  @media (max-width: 400px) {
    width: 100%;
  }
`

export const ImageInput = styled.img`
  border-radius: 4px;
  cursor: pointer;
  height: 100%;
  width: 100%;
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
