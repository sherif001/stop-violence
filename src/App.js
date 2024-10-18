import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Stories from './pages/Stories';
import Support from './pages/Support';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="main-content">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
