import styled from "styled-components";

export const CardProjectContainer = styled.button`
  display: flex;
  width: 24.31rem;
  height: 16.12rem;
  border-radius: 4px;
  margin: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4.25rem 3.75rem 4.25rem 3.75rem;
  background: ${props => props.theme.colors["$color-neutral-70"]};
  border: none;

`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors["$color-neutral-120"]};
  font-family: ${props => props.theme.fonts.regular};
  margin-top: 1rem;
`;

export const Titletext = styled.div`
  font-size: ${props => props.theme.textSizes.body1}; 
`;

export const SubtitleText = styled.div`
  font-size: ${props => props.theme.textSizes.body2};
  margin-top: 0.5rem;
`;



