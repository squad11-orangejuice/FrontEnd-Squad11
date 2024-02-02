/* eslint-disable react-hooks/exhaustive-deps */
import { axiosInstance, loginUser, socialLoginAPI } from '@/services/api'
import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { IRequestLoginSocial, IResponseLogin } from '@/utils/types'

type SignInData = {
  email: string
  password: string
}
type AuthContextType = {
  isFaileLoging: boolean
  user: IResponseLogin | null
  isAuthenticated: boolean
  signIn: (data: SignInData) => Promise<void>
  loginSocialAPI: (data: IRequestLoginSocial) => void
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isFaileLoging, setIsFaileLoging] = useState<boolean>(false)
  const [user, setUser] = useState<IResponseLogin | null>(null)

  const navigate = useNavigate()

  async function signIn(data: SignInData) {
    try {
      delete axiosInstance.defaults.headers.common.Authorization
      setIsFaileLoging(false)
      const res = await loginUser(data)

      if (res.status === 200) {
        Cookies.set('session', res.data.token, { expires: 1 })

        const user: IResponseLogin = {
          token: res.data.token,
          avatar: res.data.avatar,
          family_name: res.data.sobrenome,
          given_name: res.data.nome,
        }

        Cookies.set('user', JSON.stringify(user), { expires: 1 })
        setUser(user)
        setIsAuthenticated(true)
        navigate('/projetos')
      }
    } catch (error: unknown) {
      setIsFaileLoging(true)
    }
  }

  async function loginSocialAPI(data: IRequestLoginSocial) {
    try {
      const res = await socialLoginAPI(data)

      if (res.status === 200) {
        Cookies.set('session', res.data.token, { expires: 1 })
        Cookies.set('user', JSON.stringify(res.data), { expires: 1 })

        setUser(res.data)
        setIsAuthenticated(true)
        navigate('/projetos')
      }
    } catch (error) {
      console.error('Erro desconhecido:', error)
    }
  }

  async function logout() {
    Cookies.remove('session')
    Cookies.remove('user')
    setUser(null)
    setIsAuthenticated(false)

    delete axiosInstance.defaults.headers.common.Authorization
    navigate('/')
  }

  useEffect(() => {
    const userSession = Cookies.get('session')
    const user = Cookies.get('user')

    if (userSession && user) {
      setUser(JSON.parse(user))
      setIsAuthenticated(true)
      navigate('/projetos')
    } else {
      Cookies.remove('session')
      Cookies.remove('user')

      delete axiosInstance.defaults.headers.common.Authorization
      setUser(null)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isFaileLoging,
        isAuthenticated,
        signIn,
        user,
        loginSocialAPI,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
