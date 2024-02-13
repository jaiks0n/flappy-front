import { createContext, useEffect, useState } from 'react';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userTkn, setUserTkn] = useState(localStorage.getItem('Token') || '');
  const [userNickname, setUserNickname] = useState(
    localStorage.getItem('Nickname') || ''
  );
  const [userscore, setUserScore] = useState(
    localStorage.getItem('Score') || ''
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    userTkn ? true : false
  );

  return (
    <AuthContext.Provider
      value={{
        userTkn,
        setUserTkn,
        userscore,
        setUserScore,
        userNickname,
        setUserNickname,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
