import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4.563rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.875rem 1rem 1.875rem;
  background: ${(props) => props.theme.colors['$color-principal-100']};

  @media only screen and (min-width: 601px) {
    button {
      display: none;
    }
  }

  @media only screen and (max-width: 600px) {
  }
`

export const LeftContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    margin-right: 2rem;
  }
`

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors['$color-neutral-60']};
  font-weight:  ${(props) => props.theme.fontWeight.medium};
  font-size: ${(props) => props.theme.textSizes.h6};
  text-decoration: none;

  // mobile //
  @media only screen and (max-width: 600px) {
    display: none;
  }

  &:hover {
    color: ${props => props.theme.colors["$color-secondary-100"]};
    transition: 0.2s;
  }
  transition: 0.2s;
`;

export const TabsContainer = styled.div`
  display: flex;
  white-space: nowrap; //impedir a quebra de linha 
  
  >div{
    display: flex;
    align-items: center;
    justify-content: center;

  }
`

export const Tab = styled.div`
  margin-right: 1.25rem;
  cursor: pointer;
`
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.125rem;
`

export const UserContainer = styled.div`
  img {
    border-radius: 300px;
    width: 3rem;
    height: 3rem;
  }
`
export const NotificacaoContainer = styled.div`
  padding: 0.5rem;
  img {
    color: ${(props) => props.theme.colors['$color-neutral-60']};
    width: 2rem;
    height: 2rem;
  }
`
