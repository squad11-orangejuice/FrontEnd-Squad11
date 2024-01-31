import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton'
import { useTheme } from 'styled-components'

interface IButton extends LoadingButtonProps {
  loading?: boolean
  title: string
}

export function Button({ loading = false, title, ...rest }: IButton) {
  const theme = useTheme()

  return (
    <LoadingButton
      loading={loading}
      {...rest}
      sx={{
        width: '100%',
        backgroundColor:
          title === 'CANCELAR'
            ? '#D3D3D3'
            : theme.colors['$color-secondary-100'],
        '&:hover ': {
          backgroundColor:
            title === 'CANCELAR'
              ? '#B0B0B0'
              : theme.colors['$color-secondary-110'],
        },
      }}
    >
      {title}
    </LoadingButton>
  )
}
