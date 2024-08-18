import { Outlet, Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = () => {
  const authenticated = false;
  const url = useLocation();

  const protectedPath = ['/finance-manager', '/wealth', '/articles'];

  if(!authenticated && protectedPath.includes(url.pathname)) {
    return <Navigate to='/' />
  }

  return authenticated ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes;