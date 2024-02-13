import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';

const HomePage = () => {
  const { userNickname } = useContext(AuthContext);
  return (
    <>
      <h1>HomePage</h1>
      <h2>name:{userNickname}</h2>
    </>
  );
};

export default HomePage;
