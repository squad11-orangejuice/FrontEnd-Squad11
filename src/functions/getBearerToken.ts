import Cookies from 'js-cookie'

export function getBearerToken() {
  const token = Cookies.get('session')
  return token ? `Bearer ${token}` : null
}
