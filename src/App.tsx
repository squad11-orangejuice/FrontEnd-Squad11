import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GoogleOAuthProvider } from '@react-oauth/google'

export function App() {
  return (
    <GoogleOAuthProvider clientId="952654118268-3jvc3himegis13kc41iighgs8pk1c1j7.apps.googleusercontent.com">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </GoogleOAuthProvider>
  )
}
