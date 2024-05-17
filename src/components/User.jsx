import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [username]);

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default User;