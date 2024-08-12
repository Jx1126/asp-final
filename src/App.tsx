import Home from './components/home/Home';
import Awareness from './components/awareness/Awareness';
import Finance from './components/finance/Finance';
import Jobs from './components/jobs/Jobs';
import Articles from './components/articles/Articles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/articles" element={<Articles />} />

      </Routes>
    </Router>
    
  )
}

export default App;