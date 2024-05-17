import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';



const User = () => {
  // Use useLocation() to access the state prop(response.data) that was passed from the Search component.
  const { state } = useLocation();
  // state?.user is like state.user except it won't throw a TypeError when state is undefined/null
  // optional chaining
  const user = state?.user;

  // Without this check, the component will render before the user state/object is fetched
  if (!user) {
    return <div>Loading. Be patient.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={user.avatar_url} alt="User avatar" />
      <h1>{user.name}</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">Visit Page</a>
      <h2>Repositories</h2>
      {/* map repo components */}
    </motion.div>
  );
};

export default User;