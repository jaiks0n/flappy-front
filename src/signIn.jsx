import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const newUser = {
      lastName,
      firstName,
      nickname,
      email,
      password,
    };

    try {
      const res = await axios.post(
        'http://localhost:8080/users/signup',
        newUser
      );
      if (res.data.ok) {
        navigate('/');
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
      
    }
  };
  const checkPassword = () => {
    if (password === confPassword) {
      return true;
    } else {
      false;
    }
  };
  return (
    <Container>
      <h1 className="d-6 font-weight-normal">Sign-Up</h1>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label className="font-weight-light">LastName</Form.Label>
          <div className="inputData">
            <Form.Control
              type="text"
              placeholder="User Last Name"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label className="font-weight-light">FirstName</Form.Label>
          <div className="inputData">
            <Form.Control
              type="text"
              placeholder="User FirstName"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNickname">
          <Form.Label className="font-weight-light">Nickname</Form.Label>
          <div className="inputData">
            <Form.Control
              type="text"
              placeholder="User Nickname"
              onChange={(event) => setNickname(event.target.value)}
              value={nickname}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-weight-light">Email address</Form.Label>
          <div className="inputData">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-weight-light">Password</Form.Label>
          <div className="inputData">
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="on"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label className="font-weight-light">
            Confirm Password
          </Form.Label>
          {!checkPassword() && (
            <Form.Label style={{ color: 'red' }}>
              Password doesnt match
            </Form.Label>
          )}
          <div className="inputData">
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="on"
              value={confPassword}
              onChange={(event) => setConfPassword(event.target.value)}
            />
          </div>
        </Form.Group>

        <div className="d-flex flex-row-reverse">
          {checkPassword() && (
            <Button variant="primary" type="submit" className="">
              Sign Up
            </Button>
          )}
        </div>
      </Form>
      
    </Container>
  );
}

export default Signup;
