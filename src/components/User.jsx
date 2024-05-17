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

  // Without this check, the component will render before the user state/object is set
  if (!user) {
    return <div>Loading. Be patient.</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default User;