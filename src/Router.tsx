import { Routes, Route } from 'react-router-dom';
import { MeusProjetos } from './pages/meusProjetos';
import { Descobrir } from './pages/descobrir';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<MeusProjetos />} />
      <Route path='/descobrir' element={<Descobrir />} />
    </Routes>
  )
}