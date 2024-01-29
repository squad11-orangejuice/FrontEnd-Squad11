import styled from "styled-components";

export const DialogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:351px;
    height: 242px;
    div{
      margin: 4px 6px 4px 6px;
      text-align: center;
    }
  
`;

export const StyledDialogTitle = styled.div`
  color: ${props => props.theme.colors["$color-neutral-120"]};
  font-size:${props => props.theme.textSizes.h5};
  font-weight: ${props => props.theme.fontWeight.regular};

`;

export const StyledDialogActions = styled.div`
  button{
    color: ${props => props.theme.colors["$color-neutral-60"]};
    background: ${props => props.theme.colors["$color-secondary-100"]};
    font-size:  ${props => props.theme.textSizes.button};
    font-weight:  ${props => props.theme.fontWeight.medium};
    letter-spacing: 0.029rem;
    padding: 8px 22px 8px 22px;
    border-radius:4px;


  }
  
  
`;