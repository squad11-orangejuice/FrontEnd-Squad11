import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  align-items: center;
  background: ${(props) => props.theme.colors['$color-principal-100']};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  width: 100%;
  border-radius: 4px;

  @media only screen and (min-width: 667px) {
    padding: 1rem 2rem;
    border-radius: 0;

    .menu-hamburgue {
      display: none;
    }
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors['$color-neutral-60']};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: ${(props) => props.theme.textSizes.h6};
  letter-spacing: 0.15px;
  text-decoration: none;
  cursor: pointer;
  margin-right: 1.5rem;
  @media only screen and (max-width: 667px) {
    display: none;
  }

  &:hover {
    color: ${(props) => props.theme.colors['$color-secondary-100']};
    transition: 0.2s;
  }
  transition: 0.2s;
`

export const TabsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  @media only screen and (max-width: 667px) {
    margin-left: 9px;
  }
`
export const Logo = styled.img`
  margin-right: 100px;

  @media only screen and (max-width: 645px) {
    margin-right: 0.5rem;
    height: 31px;
  }
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`
