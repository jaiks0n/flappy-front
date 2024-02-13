import React, { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
const HomePage = () => {
  const { userNickname } = useContext(AuthContext);

  return <h1>Flappy French</h1>;
  <h2>{userNickname}</h2>;
};

export default HomePage;
