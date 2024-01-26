import styled from 'styled-components'

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 3.125rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const UserPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 7.7rem;
    height: 7.7rem;
    border-radius: 300px;
    margin-right: 2.62rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  gap: 0.5rem;
`;

export const UserNome = styled.h2`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.textSizes.h5};
  color: ${(props) => props.theme.colors['$color-neutral-120']};
`;

export const UserLocal = styled.p`
  margin: 0.03rem 0;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.textSizes.subtitle1};
  color: ${(props) => props.theme.colors['$color-neutral-90']};
`;

export const BotaoAdicionarProjeto = styled.button`
  padding: 0.5rem, 1.375rem, 0.5rem, 1.375rem;
  width: 13rem;
  height: 2.262rem;
  border-radius: 4px;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.textSizes.button};
  border: none;
  color: white;
  background: ${(props) => props.theme.colors['$color-secondary-100']};
  text-transform: uppercase;
  margin-top: 0.5rem;

  &:hover {
    background: ${(props) => props.theme.colors['$color-secondary-110']};
    transition: 0.2s;
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.38);
    cursor: default;
    background: #d3d3d3;
  }
`;

export const MyProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  margin-left: 2rem;
  margin-right: 2rem;
  gap: 1rem;
  color: ${(props) => props.theme.colors['$color-neutral-130']};
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${(props) => props.theme.textSizes.h6};

  @media only screen and (min-width: 601px) {
    max-width: 50%;
  }
`;

export const CardDisplay = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
