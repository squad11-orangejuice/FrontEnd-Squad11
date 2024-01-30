import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  font-family: 'Roboto';

}
body {
  background: ${(props) => props.theme.colors['$color-neutral-60']};
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}
`
