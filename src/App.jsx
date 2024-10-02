import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/pagine/Login';
import { Home } from './components/pagine/Home';
import { SignUp } from './components/pagine/SignUp';
import { Dashboard } from './components/pagine/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
