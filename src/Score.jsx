import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
const Score = () => {
  const [apiUsers, setApiUsers] = useState('');
  const fetchDataUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8080/users');
      setApiUsers(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDataUsers();
  }, []);
  return (
    <>
      <h1>Score</h1>
      <ListGroup>
        {apiUsers.map((user) => {
          return (
            <ListGroup.Item className="d-flex flex-column" key={user.nickname}>
              <p> Nickname : {user.nickname} </p>
              <p> Score : {user.score}</p>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default Score;
