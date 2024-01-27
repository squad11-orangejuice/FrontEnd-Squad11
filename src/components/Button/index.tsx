import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton'

interface IButton extends LoadingButtonProps {
  loading?: boolean
  title: string
}

export function Button({ loading = false, title, ...rest }: IButton) {
  return (
    <LoadingButton loading={loading} {...rest}>
      {title}
    </LoadingButton>
  )
}
