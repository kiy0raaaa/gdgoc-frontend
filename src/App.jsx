import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Overview from './pages/Overview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;