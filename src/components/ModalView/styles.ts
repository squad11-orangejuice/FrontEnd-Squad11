import styled from "styled-components";

export const HeaderContainerModal = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`
export const ContentUser = styled.div`
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.textSizes.subtitle1};
  color: ${(props) => props.theme.colors['$color-neutral-120']};
  font-weight: 400;

  p{
    color: ${(props) => props.theme.colors['$color-neutral-110']};
  }
  
`;

export const TitlePost = styled.div`
  color: ${(props) => props.theme.colors['$color-neutral-120']};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.textSizes.h5};;
`;

export const Tags = styled.div`
  border-radius:50%;
  padding: 5px;
  margin-left: 5px;
  background: ${(props) => props.theme.colors['$color-neutral-70']};
  color: ${({ theme }) => theme.colors['$color-neutral-100']};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    margin-right: 0.5rem;
  }
`
export const TagsProject = styled.div`
  display: flex;
`;
export const ContainerModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;

  img{
    width: 838px;
    height: 586px;
  }
 `;

export const FooterModal = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors['$color-neutral-120']};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${(props) => props.theme.textSizes.body2};
  margin: 2rem;

`;