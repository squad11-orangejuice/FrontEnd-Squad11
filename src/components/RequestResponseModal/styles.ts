import styled from 'styled-components'

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 351px;
  height: 242px;
  padding: 2rem 3rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  div {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`

export const StyledDialogTitle = styled.div`
  color: ${({ theme }) => theme.colors['$color-neutral-110']};
  font-size: ${({ theme }) => theme.textSizes.h5};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  width: 100%;
`

export const StyledDialogActions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`

export const ConfirmButton = styled.button`
  color: ${({ theme }) => theme.colors['$color-neutral-60']};
  background: ${({ theme }) => theme.colors['$color-secondary-100']};
  font-size: ${({ theme }) => theme.textSizes.button};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: 0.029rem;
  padding: 8px 22px 8px 22px;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
`
