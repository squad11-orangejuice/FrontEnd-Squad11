import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ModalContextProvider } from './context/ModalContext'

export function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <ModalContextProvider>
            <Router />
          </ModalContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </GoogleOAuthProvider>
  )
}
