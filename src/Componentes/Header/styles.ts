import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width:100%;
  height: 4.563rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.875rem 1rem 1.875rem;
  background: ${props => props.theme.colors["$color-principal-100"]};

`;

export const LeftContainer = styled.div`
  display: flex;
  width: 35%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.colors["$color-neutral-60"]};
  font-family: ${props => props.theme.fonts.medium};
  font-size: ${props => props.theme.textSizes.h6};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  
`;

export const Tab = styled.div`
margin-right: 20px;
cursor: pointer;
`
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.125rem;

`;

export const UserContainer = styled.div`
 img{
  border-radius: 300px;
  width: 3rem;
  height: 3rem;
 }
`
export const NotificacaoContainer = styled.div`
  padding: 0.5rem;
  img{
    color: ${props => props.theme.colors["$color-neutral-60"]};
    width: 2rem;
    height:2rem;
  }
  
 `;