import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './context/AuthProvider';

const NavBar = ({ user }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate;
  const handleLogOut = async () => {
    setIsAuthenticated(false);
    navigate('/');
    localStorage.clear();
  };
  return (
    <Nav>
      {!isAuthenticated && <Link to="/signup">Sign Up</Link>}
      {!isAuthenticated && <Link to="/">Login</Link>}
      {isAuthenticated && <Link to="/home">Home</Link>}
      <button onClick={handleLogOut}>Log Out</button>
    </Nav>
  );
};

export default NavBar;
