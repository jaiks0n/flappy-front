import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Signup from './signIn';
import Login from './LogIn';
import AuthProvider from './context/AuthProvider';
//import { NavBar } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';
import NavBar from './NavBar';

function App() {
  return (
    <AuthProvider>
      <>
      <div>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route
              path='/home'
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </>
    </AuthProvider>
  );
}

export default App;
