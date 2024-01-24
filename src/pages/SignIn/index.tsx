import { useState } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'

import { GoogleButton } from './Components/GoogleButton'

import TextField from '@mui/material/TextField'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import LogoSignIn from '@/assets/logo_home.svg'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

import {
  AreaForm,
  SignInContainer,
  Title,
  Image,
  SubTitle,
  SubmitButton,
  LinkText,
  AreaLogin,
} from './styles'

const validationSchema = z.object({
  email: z.string().email('Digite um e-mail válido'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
})

type FormInputs = z.infer<typeof validationSchema>

export function SignIn() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data)
    setLoading(true)
  }

  const handleError: SubmitErrorHandler<FormInputs> = (errors) => {
    console.error(errors)
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <SignInContainer>
      <Image src={LogoSignIn} alt="Logo Sign In" />
      <AreaLogin>
        <Title>Entre no Orange Portfólio</Title>
        <GoogleButton />
        <AreaForm onSubmit={handleSubmit(onSubmit, handleError)}>
          <SubTitle>Faça login com email</SubTitle>
          <TextField
            sx={{ width: '100%' }}
            label="Email address"
            type="email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            sx={{ width: '100%' }}
            label="Password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <SubmitButton
            type="submit"
            variant="contained"
            loading={loading}
            color="primary"
            size="large"
            sx={{ width: '100%' }}
          >
            ENTRAR
          </SubmitButton>
          <LinkText to={'/registro'}>Cadastre-se</LinkText>
        </AreaForm>
      </AreaLogin>
    </SignInContainer>
  )
}
