import { useAuth } from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'

interface Props {
  children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/" />
  }
  return children
}
