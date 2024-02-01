import { useRef, useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'

import LogoGoogle from '@/assets/logo_google.svg'
import LogoGoogleDisable from '@/assets/logo googleg_disable.svg'
import LoadingImg from '@/assets/loading.svg'

import { Loading, Logo, StyledButton, Title } from './styles'
import axios from 'axios'
import { IResponseGoogle } from '@/utils/types'
import { useAuth } from '@/hooks/useAuth'

export function GoogleButton() {
  const [loading, setLoading] = useState(false)

  const { loginSocialAPI } = useAuth()

  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const isButtonDisabled = buttonRef.current?.disabled

  function handleClickSocial() {
    setLoading(true)
    loginSocial()
  }
  const loginSocial = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo: IResponseGoogle = await axios
        .get(import.meta.env.VITE_URL_GOOGLE_AUTH, {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data)

      loginSocialAPI({
        avatar: userInfo.picture,
        email: userInfo.email,
        family_name: userInfo.family_name,
        given_name: userInfo.given_name,
        sub: userInfo.sub,
      })
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
