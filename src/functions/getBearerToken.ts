export function getBearerToken() {
  const token = localStorage.getItem('bearerToken');
  return token ? `Bearer ${token}` : null;
}