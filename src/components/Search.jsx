import githubIcon from '../media/github-icon.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { token } from '../../token.js';


const Search = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('Enter GitHub username');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputCallback = (e) => {
    setUsername(e.target.value);
  };

  const submitCallback = async (e) => {
    e.preventDefault();

    setError(false);
    setLoading(true);

    if (username.trim() === '') {
      setError(true);
      setMessage('Username cannot be empty');
      setLoading(false);
      return;
    }

    // For security reasons, I import the token from a separate file.
    const options = { headers: { Authorization: `Bearer ${window.token}` } };

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, options);
      if (response.status === 200) {
        // "The state prop is used to pass temporary state data from one route to another."
        navigate(`/user/${username}`, { state: { user: response.data } });
      }
      setLoading(false);
    } catch (error) {
      setError(true);
      setMessage('Invalid username');
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="container search-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={githubIcon} alt="GitHub logo" />
      <input type="text" placeholder="Username" value={username} onChange={inputCallback} />
      <p className={`message ${error ? 'error' : 'normal'}`}>{loading ? 'Loading...' : message}</p>
      <button onClick={submitCallback}>Search</button>
    </motion.div>
  );
};

export default Search;