/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, Route, Routes } from 'react-router-dom'

import { SignIn } from './pages/SignIn'
import { MyProjects } from './pages/MyProjects'
import { Discover } from './pages/Discover'
import { SignUp } from './pages/SignUp'

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('bearerToken');
  return token ? children : <Navigate to="/" />;
};


const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('bearerToken');
  return !token ? children : <Navigate to="/projetos" />;
};

export function Router() {
  return (
    <Routes>
      <Route path="/" element={
        <PublicRoute>
          <SignIn />
        </PublicRoute>
      } />
      <Route path="/registro" element={
        <PublicRoute>
          <SignUp />
        </PublicRoute>
      } />
      <Route path="/projetos" element={
        <PrivateRoute>
          <MyProjects />
        </PrivateRoute>
      } />
      <Route path="/descobrir" element={
        <PrivateRoute>
          <Discover />
        </PrivateRoute>
      } />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}