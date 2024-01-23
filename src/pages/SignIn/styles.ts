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

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.textSizes.h3};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  color: ${({ theme }) => theme.colors['$color-principal-90']};
`
