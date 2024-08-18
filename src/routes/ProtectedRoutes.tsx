import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const authenticated = false;
  return authenticated? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes;