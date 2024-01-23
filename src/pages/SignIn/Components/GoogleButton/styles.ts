import styled from 'styled-components'

export const StyledButton = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: none;
  border-radius: 2px;
  box-shadow:
    0px 1px 1px 0px rgba(0, 0, 0, 0.17),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08),
    0px 0px 0px 0.5px transparent;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 11px 8px;
  position: relative;
  width: 10.938rem;

  &:not(:active):hover {
    box-shadow:
      inset 0.5px 0 0 0 #4285f4,
      inset -0.5px 0 0 0 #4285f4,
      inset 0 0.5px 0 0 #4285f4,
      inset 0 -0.5px 0 0 #4285f4;
    outline: 3px solid #e8eef9;
  }

  &:active {
    background-color: #eeeeee;
    border: none;
    box-shadow:
      0px 1px 1px 0px rgba(0, 0, 0, 0.17),
      0px 0px 1px 0px rgba(0, 0, 0, 0.08),
      0px 0px 0px 0.5px transparent;
  }

  &:disabled {
    background-color: #ebebeb;
    box-shadow:
      0px 1px 1px 0px rgba(0, 0, 0, 0.17),
      0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  }

  &:focus {
    outline: 3px solid #c7dbfc;
    outline: none;
  }
`

export const Logo = styled.img`
  max-width: 18px;
  max-height: 18px;
`

export const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ theme }) => theme.textSizes.body2};
  color: rgba(0, 0, 0, 0.54);
`
