import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

interface StyledMobileMenuProps {
  isOpen: boolean
  buttonRect?: DOMRect
}

export const MobileButton = styled.button`
  background-color: transparent;
  margin-right: 1rem;
  border: none;
  cursor: pointer;

  @media only screen and (min-width: 601px) {
    display: none;
  }
`

export const MobileMenu = styled.div<StyledMobileMenuProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: ${(props) =>
    props.buttonRect ? `${props.buttonRect.bottom}px` : '50px'};
  left: ${(props) =>
    props.buttonRect ? `${props.buttonRect.left}px` : '10px'};
  top: 50px;
  right: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  z-index: 1000;
  width: 40%;
`

export const MenuItem = styled(NavLink)`
  font-family: ${(props) => props.theme.fonts.medium};
  text-decoration: none;
  display: block;
  padding: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.colors['$color-neutral-60']};
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${(props) => props.theme.textSizes.h6};
  text-decoration: none;

  // mobile //
  @media only screen and (max-width: 600px) {
    display: none;
  }

  &:hover {
    text-decoration: underline;
  }
`
