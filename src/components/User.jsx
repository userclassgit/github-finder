import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Repository from './Repository';
import { useEffect, useState } from 'react';

const User = () => {
  // Use useLocation() to access the state prop(response.data) that was passed from the Search component.
  const { state } = useLocation();
  // state?.user is like state.user except it won't throw a TypeError when state is undefined/null
  // optional chaining
  const user = state?.user;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`https://api.github.com/users/${user.login}/repos`)
        .then(response => response.json())
        .then(data => setRepos(data));
    }
  }, [user]);

  // Without this check, the component will render before the user state/object is fetched
  if (!user) {
    return <div>Loading. Be patient.</div>;
  }

  return (
    <motion.div className='container user-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={user.avatar_url} alt="User avatar" />
      <h1>{user.name}</h1>
      <span>@{user.login}</span>
      <div className='user-stats'>
        <div>
          <p>{user.public_repos}</p>
          <p>Repos</p>
        </div>
        <div>
          <p>{user.followers}</p>
          <p>Followers</p>
        </div>
        <div>
          <p>{user.following}</p>
          <p>Following</p>
        </div>
      </div>
      <a className='visit-page-btn' href={user.html_url} target="_blank" rel="noopener noreferrer">Visit Profile</a>
      {repos.length > 0 && (
        <div className="repo-container">
          <h2>Repositories</h2>
          {repos.map(repo => <Repository key={repo.id} repo={repo} />)}
        </div>
      )}
    </motion.div>
  );
};

export default User;