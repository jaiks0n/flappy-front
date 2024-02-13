import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './context/AuthProvider';

const NavBar = ({ user }) => {
  const { setIsLoggedIn, isLoggedIn } = useContext(AuthContext);

  const handleLogOut = async () => {
    try {
      const res = await axios.get('http://localhost:8080/users/logout', {
        withCredentials: true,
      });
      if (res.data.ok) {
        setIsLoggedIn(false);
        Navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Nav>
      {!isLoggedIn && <Link to="/signup">Sign Up</Link>}
      {!isLoggedIn && <Link to="/">Login</Link>}
      {isLoggedIn && <Link to="/home">Home</Link>}
      <button onClick={handleLogOut}>Log Out</button>
    </Nav>
  );
};

export default NavBar;
