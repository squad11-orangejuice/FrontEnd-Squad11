import { Navigate, Route, Routes } from 'react-router-dom'
import { MeusProjetos } from './pages/meusProjetos';
import { Descobrir } from './pages/descobrir';
import { SignIn } from './pages/SignIn'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path='/' element={<MeusProjetos />} />
      <Route path='/descobrir' element={<Descobrir />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

