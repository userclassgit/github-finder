import { Routes, Route, useLocation } from 'react-router-dom';
import './css/reset.css';
import './css/style.css';
import Search from './components/Search';
import User from './components/User';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/user/:username" element={<User />} />
    </Routes>
  );
}

export default App;