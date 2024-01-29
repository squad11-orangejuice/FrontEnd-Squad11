import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 3rem;

@media only screen and (max-width: 600px) {
    margin: 2rem;
  }
`;


export const HeaderContainerModal = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`
export const HeaderContainerBottom = styled.div`

display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;

  @media only screen and (min-width: 601px) {
    display: none;
  }


`;

export const ContentUser = styled.div`
  align-items: center;
  flex-direction: column;
  font-size: ${(props) => props.theme.textSizes.subtitle1};
  color: ${(props) => props.theme.colors['$color-neutral-120']};
  font-weight: 400;

  p{
    color: ${(props) => props.theme.colors['$color-neutral-110']};
  }
  
`;

export const TitlePost = styled.div`
  color: ${(props) => props.theme.colors['$color-neutral-120']};
  font-size: ${(props) => props.theme.textSizes.h5};;
`;

export const TitlePostBottom = styled.div`
  color: ${(props) => props.theme.colors['$color-neutral-120']};
  font-size: ${(props) => props.theme.textSizes.h5};;
  margin-bottom: 1rem;

  @media only screen and (min-width: 601px) {
    display: none;
  }
`;



export const Tags = styled.div`
  border-radius:50%;
  padding: 5px;
  margin-left: 5px;
  background: ${(props) => props.theme.colors['$color-neutral-70']};
  font-size: 12px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    margin-right: 0.5rem;

    @media only screen and (max-width: 600px) {
    height: 30px;
  }
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
  width: 100%;

  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }

 `;

export const ImageContainer = styled.div`

display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;

  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }

  img{
    width: 100%;
    height: 836px;

    @media only screen and (max-width: 600px) {
    height: 300px;
  }

  }
`;


export const FooterModal = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  margin: 2rem;
  width: 100%;

  p {
    margin-top: 2rem;
    font-size: ${(props) => props.theme.textSizes.body1};
    font-size: ${(props) => props.theme.fontWeight.regular};

  }
`;