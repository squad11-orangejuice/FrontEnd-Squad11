import { useState } from 'react'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/Button'

import { useTheme } from 'styled-components'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { registerUser } from '@/services/api'

import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import LogoSignUp from '@/assets/logo_register.svg'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

import {
  SignUpContainer,
  Image,
  Title,
  AreaForm,
  LinkText,
  AreaRegister,
  AlertModal,
} from './styles'

const validationSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  surname: z.string().min(1, 'O sobrenome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Digite um e-mail válido'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
})

type FormInputs = z.infer<typeof validationSchema>

export function SignUp() {
  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [sucessRegister, setSucessRegister] = useState<boolean>(false)
  const [messageError, setMessageError] = useState<string>('')

  const theme = useTheme()
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationFn: async (data: FormInputs) => {
      return registerUser(data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['project'] })
      setLoading(false)
      setSucessRegister(true)
    },
    onError: (error) => {
      console.log(error)
      setLoading(false)
      setMessageError('Error Message')
    },
  })

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
    mutateAsync(data)
  }

  const handleError: SubmitErrorHandler<FormInputs> = (errors) => {
    console.error(errors)
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const addClassSucess = sucessRegister ? 'visible' : ''
  const addClassError = messageError.length > 0 ? 'visible' : ''

  return (
    <SignUpContainer>
      <Image src={LogoSignUp} alt="Logo Sign In" />
      <AreaRegister>
        <AlertModal
          className={addClassSucess}
          severity="success"
          variant="filled"
          iconMapping={{
            success: <CheckCircleOutlineIcon />,
          }}
        >
          Cadastro feito com sucesso
        </AlertModal>

        <AlertModal className={addClassError} severity="error" variant="filled">
          Usuário ja cadastrado
        </AlertModal>

        <Title>Cadastre-se</Title>
        <AreaForm onSubmit={handleSubmit(onSubmit, handleError)}>
          <TextField
            sx={{ width: '100%' }}
            label="Nome"
            type="text"
            required
            {...register('name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            sx={{ width: '100%' }}
            label="Sobrenome"
            type="text"
            required
            {...register('surname')}
            error={!!errors.surname}
            helperText={errors.surname?.message}
          />
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
          <Button
            title="CADASTRAR"
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: '100%',
              gridColumn: 'span 2',
              backgroundColor: theme.colors['$color-secondary-100'],
              '&:hover': {
                backgroundColor: theme.colors['$color-secondary-110'],
              },
            }}
            loading={loading}
          />
          <LinkText to={'/'}>Logar</LinkText>
        </AreaForm>
      </AreaRegister>
    </SignUpContainer>
  )
}
