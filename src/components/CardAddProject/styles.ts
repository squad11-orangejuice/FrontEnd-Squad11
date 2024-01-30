import { styled } from 'styled-components'

export const InputImage = styled.div`
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors['$color-neutral-70']};
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  justify-content: center;
  width: 100%;
`
export const TitleImageInput = styled.p`
  color: ${({ theme }) => theme.colors['$color-neutral-120']};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.textSizes.body1};
  line-height: 1rem;
  letter-spacing: 0.5px;
  opacity: 0.6;
  width: 100%;
`

export const TextImageInput = styled.p`
  color: ${({ theme }) => theme.colors['$color-neutral-120']};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.textSizes.body2};
  line-height: 0.875rem;
  letter-spacing: 0.25px;
  margin: 0 auto;
  margin-top: 1rem;
  opacity: 0.6;
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
