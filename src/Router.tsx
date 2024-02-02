import { Navigate, Route, Routes } from 'react-router-dom'

import { SignIn } from './pages/SignIn'
import { MyProjects } from './pages/MyProjects'
import { Discover } from './pages/Discover'
import { SignUp } from './pages/SignUp'
import { RequireAuth } from './auth/RequireAuth'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/registro" element={<SignUp />} />
      <Route
        path="/projetos"
        element={
          <RequireAuth>
            <MyProjects />
          </RequireAuth>
        }
      />
      <Route
        path="/descobrir"
        element={
          <RequireAuth>
            <Discover />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}
