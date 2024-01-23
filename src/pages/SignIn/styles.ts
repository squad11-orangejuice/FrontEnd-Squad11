import styled from 'styled-components'

export const SignInContainer = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Image = styled.img`
  height: 100vh;
  max-width: 32.813rem;
  @media (max-width: 1100px) {
    display: none;
  }
`

export const AreaForm = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.textSizes.h3};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  line-height: 40px;
  color: ${({ theme }) => theme.colors['$color-principal-90']};

  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.textSizes.h5};
    line-height: 24px;
  }
`
