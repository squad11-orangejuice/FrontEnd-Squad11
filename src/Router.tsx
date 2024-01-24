import { Navigate, Route, Routes } from 'react-router-dom'

import { SignIn } from './pages/SignIn'
import { MyProjects } from './pages/myProjects'
import { Discover } from './pages/discover'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/projetos" element={<MyProjects />} />
      <Route path="/descobrir" element={<Discover />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
