import LogoGoogle from '@/assets/a.svg'
import LogoGoogleDisable from '@/assets/logo googleg_disable.svg'

import { Logo, StyledButton, Title } from './styles'
import { useRef } from 'react'

export function GoogleButton() {
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const isButtonDisabled = buttonRef.current?.disabled

  return (
    <StyledButton ref={buttonRef}>
      {isButtonDisabled ? (
        <Logo src={LogoGoogleDisable} alt="logo google" />
      ) : (
        <Logo src={LogoGoogle} alt="logo google" />
      )}
      <Title>Entrar com Google</Title>
    </StyledButton>
  )
}
