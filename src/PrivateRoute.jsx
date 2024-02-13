import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return <div>{isLoggedIn ? children : <Navigate to='/' />}</div>;
};

export default PrivateRoute;
