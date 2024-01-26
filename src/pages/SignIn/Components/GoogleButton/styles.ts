import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const StyledButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 2px;
  box-shadow:
    0px 1px 1px 0px rgba(0, 0, 0, 0.17),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08),
    0px 0px 0px 0.5px transparent;
  margin: 0 auto;
  padding: 11px 8px;
  position: relative;
  width: 10.938rem;
  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
  }

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
  }
`

export const Logo = styled.img`
  max-height: 18px;
  max-width: 18px;
`

export const Title = styled.span`
  color: rgba(0, 0, 0, 0.54);
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.textSizes.body2};
`

export const Loading = styled.img`
  animation: ${rotate} 2s linear infinite;
  margin: 0 auto;
  max-height: 18px;
  max-width: 18px;
`
