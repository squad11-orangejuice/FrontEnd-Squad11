import { Navigate, Route, Routes } from 'react-router-dom'
import { SignIn } from './pages/SignIn'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
