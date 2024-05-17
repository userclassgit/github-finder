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
      <h1>{user.name}</h1>
    </motion.div>
  );
};

export default User;