import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userNickname, setUserNickname] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await axios.get('http://localhost:8080/users/check-status', { withCredentials: true });
        console.log(res.data)
        if (res.data.ok) {
          navigate('/home')
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.log(err);
        setIsLoggedIn(false);
      }
    };

    checkStatus();
  }, [isLoggedIn]);

  return <AuthContext.Provider value={{ setIsLoggedIn, isLoggedIn,userNickname,setUserNickname }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export { AuthContext };
