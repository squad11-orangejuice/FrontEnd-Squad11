import { GoogleButton } from './Components/GoogleButton'
import { AreaForm, SignInContainer, Title, Image } from './styles'
import LogoSignIn from '@/assets/logo_home.svg'

export function SignIn() {
  return (
    <SignInContainer>
      <Image src={LogoSignIn} alt="Logo Sign In" />
      <AreaForm>
        <Title>Entre no Orange Portfólio</Title>
        <GoogleButton />
        <Title>Entre no Orange Portfólio</Title>
      </AreaForm>
    </SignInContainer>
  )
}
