import { Navigate, Route, Routes } from 'react-router-dom'

import { SignIn } from './pages/SignIn'
import { MyProjects } from './pages/MyProjects'
import { Discover } from './pages/Discover'
import { SignUp } from './pages/SignUp'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/registro" element={<SignUp />} />

      <Route path="/projetos" element={<MyProjects />} />
      <Route path="/descobrir" element={<Discover />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
