import { useRef, useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'

import LogoGoogle from '@/assets/logo_google.svg'
import LogoGoogleDisable from '@/assets/logo googleg_disable.svg'
import LoadingImg from '@/assets/loading.svg'

import { Loading, Logo, StyledButton, Title } from './styles'

export function GoogleButton() {
  const [loading, setLoading] = useState(false)

  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const isButtonDisabled = buttonRef.current?.disabled

  function handleClickSocial() {
    setLoading(true)
    loginSocial()
  }
  const loginSocial = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse)
      setLoading(false)
    },
  })

  return (
    <StyledButton ref={buttonRef} onClick={handleClickSocial}>
      {loading ? (
        <Loading src={LoadingImg} alt="loading" />
      ) : (
        <div>
          {isButtonDisabled ? (
            <Logo src={LogoGoogleDisable} alt="logo google" />
          ) : (
            <Logo src={LogoGoogle} alt="logo google" />
          )}
          <Title>Entrar com Google</Title>
        </div>
      )}
    </StyledButton>
  )
}
